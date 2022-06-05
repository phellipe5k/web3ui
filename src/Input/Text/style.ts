import styled, { css, keyframes } from 'styled-components';
import { InputTextTypes } from './types';
import colors from '../../colors';

const grow = keyframes`
    50% {
        transform: scale(1.06) ;
    }
    100% {
        transform: scale(1.01) ;
    }
`;

export const Container = styled.section<InputTextTypes>`
    ${({ color, inputFocus }) => css`
        position: relative;
        margin-top: 25px ;
        span {
            font-family: Arial ;
            transition: 150ms ease-in-out;
            position: absolute;
            left: 17px;
            top: 15px;
            font-size: 14px ;
            color: ${ color };
            opacity: 0.7;
            ${ inputFocus && css`
                left: 4px;
                top: -25px;    
                opacity: 1;
            ` } 

        }
    `}
`


export const Input = styled.input<InputTextTypes>`
    ${({ gradientColors, color, fontSize, textColor, gradient, glow, border, transparency, width, height }) => css`
        width: ${ width || 'auto' };
        height: ${ height || 'auto' };
        outline: none;
        padding: 4px  12px 4px 16px;
        border-radius: 7px;
        border: 1px solid ${ '#ccc' };
        transition: 150ms ease-in-out ;
        background-color: ${color};
        color: ${ textColor } ;
        font-size: ${ fontSize || '12px'};
        &:focus {
            border: 2px solid ${ border };
        }

        ${ transparency && css`
            opacity: ${transparency};
        ` }
        ${ glow && css`
            &:focus {
                box-shadow: 0px 0px 12px ${ glow };
            }
        ` }
        ${ gradientColors && css`
            background-image: linear-gradient(to right, ${typeof gradientColors == 'object' ? gradientColors.reduce((el: any, acc: any) => `${acc}, ${el}` ) : gradientColors.split(',').reduce((el: any, acc: any) => `${acc}, ${el}` ) });
        ` }
        ${ border == 'gradient' && css`
            border: 2px solid transparent !important;
            background-image: linear-gradient(${color}, ${color}), radial-gradient(circle at left top, ${typeof gradientColors == 'object' ? gradientColors.reduce((el: any, acc: any) => `${acc}, ${el}` ) : gradientColors.split(',').reduce((el: any, acc: any) => `${acc}, ${el}` ) });
            background-origin: border-box;
            background-clip: padding-box, border-box;
        ` }
    `}
`