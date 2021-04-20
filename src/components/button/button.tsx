import * as React from 'react';
import styled from 'styled-components';
import { mixinMediaQuery } from '../layout/global';

interface IKhoraButtonProps {
	invert?: boolean;
	className: string;
}

const KhoraButton = styled.button`
	&.lg {
		font-family: 'ArcadeClassic';
		${mixinMediaQuery(`xxs`, `--btn-width: 98%`)}
		${mixinMediaQuery(`mobile`, `--btn-width: 95%`)}
		${mixinMediaQuery(`tablet`, `--btn-width: 85%`)}
		${mixinMediaQuery(`desktop`, `--btn-width: 70%`)}
		${mixinMediaQuery(`largeDesktop`, `--btn-width: 50%`)}
		--btn-height: 60px;
		--btn-font-size: 1.5em;
		&:before,
		&:after {
			content: '';
			z-index: 1;
			position: absolute;
			top: calc(var(--btn-height) / -2);
			width: 0;
			height: 0;
			border-style: solid;
			border-color: transparent
				${(props: IKhoraButtonProps) => (props.invert ? `white` : `#fc3638`)} transparent
				transparent;
		}
		&:before {
			border-width: var(--btn-height) 17px var(--btn-height) 0;
			transform: rotate(180deg);
			left: -1px;
		}
		&:after {
			border-width: var(--btn-height) 17px var(--btn-height) 0;
			right: -1px;
		}
	}
	&.sm {
		${mixinMediaQuery(`xxs`, `--btn-width: 120px`)}
		${mixinMediaQuery(`desktop`, `--btn-width: 130px`)}
		${mixinMediaQuery(`largeDesktop`, `--btn-width: 140px`)}
		--btn-height: 50px;
		--btn-font-size: 85%;
	}
	background: ${(props: IKhoraButtonProps) => (props.invert ? `#fc3638` : `white`)};
	color: ${(props: IKhoraButtonProps) => (props.invert ? `white` : `#fc3638`)};
	border: none;
	position: relative;
	cursor: pointer;
	height: var(--btn-height);
	width: var(--btn-width);
	font-size: var(--btn-font-size);
	&:focus {
		outline: none;
	}
`;

interface IButtonProps {
	title: string;
	size?: `sm` | `lg`;
	invert?: boolean;
}

const Button = ({ title, size, invert }: IButtonProps) => {
	return (
		<>
			<KhoraButton invert={invert} className={size}>
				{title}
			</KhoraButton>
		</>
	);
};

export default Button;
