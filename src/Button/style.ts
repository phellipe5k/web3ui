import styled, { css } from 'styled-components';
import { ButtonTypes } from './types';
import colors from '../colors';

export const Button = styled.button<ButtonTypes>`
    ${({ color, textColor, gradient, glow, border, transparency }) => css`
        background-color: ${ typeof color == 'string' ? color : colors.primary};
        color: ${ textColor };
        padding: 12px 32px;
        border-radius: 35px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        ${ glow && css`
            &:hover {
                box-shadow: 0px 0px 20px ${ glow };
            }
        ` }
        ${ gradient && css`
            background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
            ${ border == 'gradient' && css`
                border: 2px solid transparent;
                background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192));
                background-origin: border-box;
                background-clip: padding-box, border-box;
            ` }
        ` }
        ${ border && css`
            border: 2px solid ${ border }
        ` }
        ${ transparency && css`
            opacity: ${ transparency };
        ` }
    `}
`