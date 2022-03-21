import styled, { css } from 'styled-components';
import { ButtonTypes } from './types';

export const Button = styled.button<ButtonTypes>`
    ${({ gradientColors, color, textColor, gradient, glow, border, transparency }) => css`
        background-color: ${ color }};
        color: ${ textColor };
        padding: 12px 32px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        &:active {
            transform: scale(0.95);
        }
        ${ glow && css`
            &:hover {
                box-shadow: 0px 0px 20px ${ glow };
            }
        ` }
        ${ gradient && css`
            background-image: linear-gradient(to right, ${typeof gradientColors == 'object' ? gradientColors.reduce((el: any, acc: any) => `${acc}, ${el}` ) : gradientColors.split(',').reduce((el: any, acc: any) => `${acc}, ${el}` ) });
        ` }
        ${ border && css`
            border: 2px solid ${ border };
            ${ border == 'gradient' && css`
                border: 2px solid transparent;
                background-image: linear-gradient(${color}, ${color}), radial-gradient(circle at left top, ${typeof gradientColors == 'object' ? gradientColors.reduce((el: any, acc: any) => `${acc}, ${el}` ) : gradientColors.split(',').reduce((el: any, acc: any) => `${acc}, ${el}` ) });
                background-origin: border-box;
                background-clip: padding-box, border-box;
            ` }
        ` }
        ${ transparency && css`
            opacity: ${ transparency };
        ` }
    `}
`