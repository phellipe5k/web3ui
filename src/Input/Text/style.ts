import styled, { css, keyframes } from 'styled-components';
import { InputTextTypes } from './types';

const grow = keyframes`
    50% {
        transform: scale(1.06) ;
    }
    100% {
        transform: scale(1.01) ;
    }
`;

export const Container = styled.section<InputTextTypes>`
    ${({ }) => css`
        
    `}
`


export const Input = styled.input<InputTextTypes>`
    ${({ gradientColors, color, textColor, gradient, glow, border, transparency, width, height }) => css`
        width: ${ width || 'auto' };
        height: ${ height || 'auto' };
    `}
`