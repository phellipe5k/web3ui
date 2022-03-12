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
