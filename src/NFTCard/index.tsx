import React, { useEffect, useState } from 'react';
import { NftCardTypes } from './types';
import colors from '../colors'
import * as S from './style';
import Button from '../Button';
import { Ethereum as EthereumIcon } from '@styled-icons/simple-icons';
import { Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material';

export const NftCard = ({
    width,
    height,
    colorsPallete = colors.primary,
    glow,
    gradientColors,
    children,
    favorite = false,
    limitDate = '2022-06-07T03:00:00.000Z',
    setFavoriteStatus = (v: any) => console.log(v),
    ...props
}: NftCardTypes) => {
    const [favoriteStatus, setFavorite] = useState(favorite);
    const [hovered, setHovered] = useState(false);
    let [time, setTime] = useState(null);
    function msToTime(duration: any) {
        var seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        return hours + "h : " + minutes + "m : " + seconds + 's';
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
            colorsPallete={ colorsPallete }
            glow={ glow }
            gradientColors={ gradientColors }
            {...props}
        >

            <S.Image>
                <S.HourCounter hovered={hovered}>
                {time}
                </S.HourCounter>
                <S.Wishlist
                hovered={hovered || favoriteStatus ? true : false}
                onClick={ () => setFavorite(v => !v) }>{ favoriteStatus ?  <FavoriteIcon color='white' size={20} /> : <FavoriteBorderIcon color='white' size={20} /> }</S.Wishlist>
            </S.Image>
            <S.ContentWrapper>
                <S.Profile>
                    <S.Avatar src={'https://avatars.githubusercontent.com/u/62181598?v=4'} />
                    <S.PInfo>
                        <S.Name>Luiz Andrade</S.Name>
                        <S.Nickname>@phellipe5k</S.Nickname>
                    </S.PInfo>
                </S.Profile>
                <S.PriceInfo>
                    <S.Text>CURRENT BID</S.Text>
                    <S.Price>3.5 <EthereumIcon size={22} color="white" /></S.Price>
                </S.PriceInfo>
                <S.ButtonsWrapper>
                    <Button.Default
                        textColor='#CAFC01'
                        border='#CAFC01'
                        color='#161334'
                        width='48%'
                        height="32px"
                        style={ { padding: '0px', fontSize: '13px', borderWidth: '1.5px '  } }
                    >
                        View artwork
                    </Button.Default>
                    <Button.Default
                        textColor='#161334'
                        color='#CAFC01'
                        width='48%'
                        height="32px"
                        style={ { padding: '0px', fontSize: '13px'  } }
                    >
                        Place a bid
                    </Button.Default>
                </S.ButtonsWrapper>
            </S.ContentWrapper>
        { children }
        </S.NftCard>
    );
};



export default NftCard;


export const StoryBookSelect = {
	['Default']: (props: NftCardTypes) => <NftCard { ...props } />
};
