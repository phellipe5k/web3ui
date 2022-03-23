import React, { useState } from 'react';
import {
	InputTextTypes
} from './types';
import colors from '../../colors'
import * as S from './style';
import { useEffect } from '@storybook/addons';

export const InputText = ({
  	color = colors.primary,
	gradientColors = ['rgb(1 134 218)', 'rgb(182 49 167)'],
	textColor = 'white',
	glow,
	gradient,
	border,
	transparency,
	width = '250px',
	height = '35px',
	children = 'Button',
	onChange = (v: any) => console.log(v),
  ...props
}: InputTextTypes) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value) {
			onChange(value);
		}
	}, [value])
  return (
    <S.Container>
		<S.Input
			onChange={({ target }: { target: any }) => setValue(target.value)}
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
			value={ value }
			{...props}
		/>
    </S.Container>
  );
};

export default InputText;

export const StoryBookSelect = {
	['Default']: (props: InputTextTypes) => <InputText { ...props } />
};
