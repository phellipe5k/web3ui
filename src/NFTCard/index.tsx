import React, { useEffect, useState } from 'react';
import { NftCardTypes } from './types';
import * as S from './style';
import Button from '../Button';
import { Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material';



export const NftCard = ({
    width,
    height,
    colorsPallete = {
        text_primary: '#0a0a0a',
        text_secondary: '#2e2e2e',
        background: '#f2f2f2',
        border: '#6622e3',
        
    },
    glow,
    gradientColors,
    info = { collection_logo: 'https://img.myloview.com.br/adesivos/1960s-hippie-wallpaper-design-trippy-glitchy-background-for-psychedelic-60s-70s-parties-with-bright-acid-rainbow-colors-and-groovy-geometric-wavy-pattern-700-217844969.jpg', collection_name: 'Fucking NFT Awesome', name: 'BMTH #2548'  },
    children = <>
    <Button.Default
        textColor='#6622e3'
        border='#6622e3'
        color='#f2f2f2'
        width='48%'
        height="32px"
        style={ { padding: '0px', fontSize: '13px', borderWidth: '1.5px '  } }
    >
        View artwork
    </Button.Default>
    <Button.Default
        textColor='#f2f2f2'
        color='#530ead'
        width='48%'
        height="32px"
        style={ { padding: '0px', fontSize: '13px'  } }
    >
        Place a bid
    </Button.Default>
    </>,
    favorite = false,
    limitDate = '2022-06-07T03:00:00.000Z',
    setFavoriteStatus = (v: any) => console.log(v),
    ...props
}: NftCardTypes) => {
    const [favoriteStatus, setFavorite] = useState(favorite);
    const [hovered, setHovered] = useState(false);
    let [time, setTime] = useState(null);
    function msToTime(duration: any) {
        let seconds: any = parseInt((duration/1000) % 60);
        let minutes: any = parseInt((duration/(1000*60)) % 60);
        let hours: any = parseInt((duration / (1000*60*60))%24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        return hours + "h : " + minutes + "m : " + seconds + 's';
    }

    const limitStringSize = (text: string, limit: number) => {
        if (text.length >= limit) {
            return `${text.substr(0, limit)}...`;
        }
        return text;
    }

    const handleTimeTracking = (date: string) => {
        if (date) {
            setInterval(() => {
                let now = new Date().getTime();
                let limit = new Date(date).getTime();
                let result = limit - now; 
                setTime(msToTime(result));
                
            }, 1000);
        }
    }

    useEffect(() => {
        if (limitDate) {
            handleTimeTracking(limitDate);
        }
    }, []);

    useEffect(() => {
        setFavoriteStatus(favoriteStatus)
    }, [favoriteStatus]);

    return (
        <S.NftCard
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            width={ width }
            height={ height }
            pallete={ colorsPallete }
            glow={ glow }
            gradientColors={ gradientColors }
            {...props}
        >

            <S.Image>
                { limitDate && (
                    <S.HourCounter hovered={hovered}>
                    {time}
                    </S.HourCounter>
                ) }
                
                <S.Wishlist
                hovered={hovered || favoriteStatus ? true : false}
                onClick={ () => setFavorite(v => !v) }>{ favoriteStatus ?  <FavoriteIcon color='white' size={20} /> : <FavoriteBorderIcon color='white' size={20} /> }</S.Wishlist>
            </S.Image>
            <S.ContentWrapper>
                <S.Profile>
                    <S.Avatar src={info.collection_logo} />
                    <S.PInfo>
                        <S.Name color={colorsPallete} >{ limitStringSize(info.collection_name, 14) }</S.Name>
                        <S.Nickname color={ colorsPallete }>{ limitStringSize(info.name, 16) }</S.Nickname>
                    </S.PInfo>
                </S.Profile>
                <S.PriceInfo>
                    <S.Box width={'55%'}>
                        <S.Text color={colorsPallete}>Price</S.Text>
                        <S.Price color={colorsPallete}>0.09<span>ETH</span> </S.Price>
                    </S.Box>
                    
                    <S.Box width={'45%'}>
                        <S.Text color={colorsPallete}>Highest bid</S.Text>
                        <S.Price color={colorsPallete}>0.02<span>ETH</span> </S.Price>
                    </S.Box>
                </S.PriceInfo>
                <S.ButtonsWrapper>
                    { children }
                </S.ButtonsWrapper>
            </S.ContentWrapper>
        </S.NftCard>
    );
};



export default NftCard;


export const StoryBookSelect = {
	['Default']: (props: NftCardTypes) => <NftCard { ...props } />
};
