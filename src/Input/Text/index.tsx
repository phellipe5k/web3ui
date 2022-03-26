import React, { useState, useEffect, useRef } from 'react';
import {
	InputTextTypes
} from './types';
import colors from '../../colors'
import * as S from './style';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

export const InputText = ({
  	color = colors.primary,
	gradientColors = 'rgb(1 134 218), rgb(182 49 167)',
	textColor = 'white',
	glow,
	gradient,
	border,
	transparency,
	width = '250px',
	height = '35px',
	label = 'Label',
	children = 'Button',
	type = 'text',
	onChange = (v: any) => console.log(v),
  ...props
}: InputTextTypes) => {
	const [value, setValue] = useState('');
	const [inputFocus, setInputFocus] = useState(false);
	const inputRef = useRef(null);
	useOutsideAlerter(inputRef, () =>  !value && setInputFocus(false), value);

	useEffect(() => {
		if (value) {
			onChange(value);
		}
	}, [value])
  return (
    <S.Container color={ textColor } inputFocus={ inputFocus } >
		<S.Input
			ref={ inputRef }
			onFocus={ () => setInputFocus(true) }
			onChange={({ target }: { target: any }) => setValue(target.value)}
			width={ width }
			height={ height }
			transparency={ transparency }
			type={ type }
			color={ color }
			glow={ glow }
			border={ border }
			textColor={ textColor }
			gradient={gradient}
			gradientColors={ gradientColors }
			value={ value }
			{...props}
		/>
		<span>{ label }</span>
    </S.Container>
  );
};

export default InputText;

export const StoryBookSelect = {
	['Default']: (props: InputTextTypes) => <InputText { ...props } />
};
