import React from 'react';
import { ButtonTypes } from './types';
import colors from '../colors'
import * as S from './style';

export const Button = ({
  color = colors.primary,
	textColor = 'white',
	glow,
	gradient,
	border,
  label,
	transparency,
  ...props
}: ButtonTypes) => {


  return (
    <S.Button
		transparency={ transparency }
        type="button"
		color={ color }
		glow={ glow }
		border={ border }
		textColor={ textColor }
		gradient={gradient}
		{...props}
    >
      {label}
    </S.Button>
  );
};

export const Gradient = ({ label = 'Button', textColor = 'white', border = '', gradient = true, glow = '#5a26d8' }: ButtonTypes) => {
	const props = { label, textColor, border, gradient, glow };
	return <Button {...props}>{label}</ Button>
}

export const BorderGradient = ({ label = 'Button', textColor = 'white', border = 'gradient', gradient = true, glow = '#5a26d8' }: ButtonTypes) => {
	const props = { label, textColor, border, gradient, glow };
	return <Button {...props}>{label}</ Button>
}

export default {
	['Gradient']: () => <Gradient />,
	['BorderGradient']: () => <BorderGradient />,
	['Default']: (props: ButtonTypes) => <Button { ...props } />
};
