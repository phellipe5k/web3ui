import styled, { css } from 'styled-components';
import { NftCardTypes } from './types';

export const NftCard = styled.section<NftCardTypes>`
    ${({ width, height, pallete }) => css`
        width: ${ width || '230px' };
        height: ${ height || '370px' };
        padding: 16px;
        border-top-left-radius: 2px;
        border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 2px;
        background-color: ${ pallete.background };
        border: 2px solid ${ pallete.border };
    `}
`;

export const Image = styled.div`
    ${({ nft }) => css`
        width: 100%;
        height: 53%;
        border-top-left-radius: 2px;
        border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 2px;
        background-image: url(${nft});
        background-position: center;
        background-size:  cover;
        position: relative;
    `}
`;

export const ContentWrapper = styled.article`
    height: 47%;
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
    width: calc(100% - 60px );
`;


export const Name = styled.h3`
    ${({ color }) => css`
        margin: 0;
        padding: 0;
        font-size: 19px;
        color: ${ color.text_primary };
    `}

`;


export const Nickname = styled.p`
    ${({ color }) => css`
        margin: 0;
        padding: 0;
        margin-top: 4px;
        font-size: 12px;
        color: ${ color.text_secondary };
    `}
`;

export const PriceInfo = styled.div`
    padding: 8% 0;
    display: flex;
`;


export const Text = styled.p`
    ${({ color }) => css`
        margin: 0;
        padding: 0;
        margin-bottom: 8px;
        color: ${color.text_secondary};

        font-size: 14px;
    `}
`;

export const Price = styled.p`
   ${({ color }) => css`
        margin: 0;
        color: ${ color.text_primary };
        padding: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        span {

            font-size: 14px;
            margin-left: 4px;
            margin-top:  5px;
        }
    `}

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
export const Box = styled.div`
${({ width }: { width?: string }) => css`
    width: '50%';
    ${ width && css`
        width: ${ width };
    ` }
`}
`;

export const Blockchain = styled.section`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:  center;
    p {    
        margin: 0;
        font-size: 14px !important;
    }
`;

export const Icon = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    background-color: #CAFC01;
    justify-content: center;
    align-items: center;
`;
