import styled, { css } from 'styled-components';
import { NftCardTypes } from './types';

export const NftCard = styled.section<NftCardTypes>`
    ${({ width, height }) => css`
        width: ${ width || '230px' };
        height: ${ height || '370px' };
        padding: 16px;
        border-top-left-radius: 2px;
        border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 2px;
        background-color: #161334;
        border: 2px solid #253765;
    `}
`;

export const Image = styled.div`
    width: 100%;
    height: 55%;
    border-top-left-radius: 2px;
    border-top-right-radius: 18px;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 2px;
    background-image: url('https://p4.wallpaperbetter.com/wallpaper/537/788/16/bring-me-the-horizon-thats-the-spirit-wallpaper-preview.jpg');
    background-position: center;
    background-size:  cover;
    position: relative;
`;

export const ContentWrapper = styled.article`
    height: 45%;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Profile = styled.section`
    display: flex;
    margin-top: 12px;
    width: 100%;
    justify-content: space-between;
`;

export const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;


export const PInfo = styled.div`
    color: white;
    width: calc(100% - 60px );
`;


export const Name = styled.h3`
    margin: 0;
    padding: 0;
`;


export const Nickname = styled.p`

    margin: 0;
    padding: 0;
    margin-top: 4px;
    font-size: 11px;
`;

export const PriceInfo = styled.div`
    padding: 8% 0;
`;


export const Text = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
    color: white;
    font-size: 10px;
`;

export const Price = styled.p`
    margin: 0;
    color: white;
    padding: 0;
    font-size: 24px;
    display: flex;
    align-items: center;
`

export const HourCounter = styled.div`
    ${({ hovered }: { hovered?: boolean }) => css`
        position: absolute;
        width: 58%;
        top: 3%;
        left: 3%;
        height: 35px;
        background: red;
        border-top-left-radius: 0px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: lighter;
        background: #FFFFFF2E;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11.6px);
        -webkit-backdrop-filter: blur(11.6px);
        transition: .3s ease-in-out;
        opacity: 0;
        cursor: default;
        transform: translateY(-8px);
        ${ hovered && css`
            opacity: 1;
            transform: translateY(0px);        
        ` }
    `}
`;

export const Wishlist = styled.div`
    ${({ hovered }: { hovered?: boolean }) => css`
        position: absolute;
        top: 3%;
        right: 3%;
        width: 35px;
        height: 35px;
        border-top-left-radius: 0px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 0px;
        background: #FFFFFF2E;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11.6px);
        -webkit-backdrop-filter: blur(11.6px);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: .3s ease-in-out;
        opacity: 0;
        transform: translateY(-8px);
        ${ hovered && css`
            opacity: 1;
            transform: translateY(0px);        
        ` }
    `}
`;