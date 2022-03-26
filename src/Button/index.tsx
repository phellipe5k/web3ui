import React from 'react';
import {
	ButtonTypes,
	BorderGradientDefault,
	GradientDefault,
	TransparentDefault
} from './types';
import colors from '../colors'
import * as S from './style';

export const Button = ({
  	color = colors.primary,
	gradientColors = ['rgb(1 134 218)', 'rgb(182 49 167)'],
	textColor = 'white',
	glow,
	gradient,
	border,
	transparency,
	width,
	height,
	children = 'Button',
  ...props
}: ButtonTypes) => {


  return (
    <S.Button
		width={ width }
		height={ height }
		transparency={ transparency }
        type="button"
		color={ color }
		glow={ glow }
		border={ border }
		textColor={ textColor }
		gradient={gradient}
		gradientColors={ gradientColors }
		{...props}
    >
      { children }
    </S.Button>
  );
};

export const Gradient = (props: ButtonTypes) => {
	return <Button { ...GradientDefault } {...props}>{props.children}</ Button>
}

export const BorderGradient = (props: ButtonTypes) => {
	return <Button { ...BorderGradientDefault }{...props}>{props.children}</ Button>
}


export const Transparent = (props: ButtonTypes) => {
	return <Button { ...TransparentDefault } {...props}>{props.children}</ Button>
}


export default Button;

export const StoryBookSelect = {
	['Gradient']: (props: ButtonTypes) => <Gradient { ...props } />,
	['BorderGradient']: (props: ButtonTypes) => <BorderGradient { ...props } />,
	['Transparent']: (props: ButtonTypes) => <Transparent { ...props } />,
	['Default']: (props: ButtonTypes) => <Button { ...props } />
};
