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
		${mixinMediaQuery(`xxs`, `--btn-width: 98%; font-size: 1.4em`)}
		${mixinMediaQuery(`mobile`, `--btn-width: 95%`)}
		${mixinMediaQuery(`tablet`, `--btn-width: 85%`)}
		${mixinMediaQuery(`desktop`, `--btn-width: 70%`)}
		${mixinMediaQuery(`largeDesktop`, `--btn-width: 40%`)}
		--btn-height: 60px;
		--btn-font-size: 2.2em;
		box-shadow: 1px 15px 12px -15px #000000;
		transition: all 0.2s;
		&:hover {
			box-shadow: none;
			${mixinMediaQuery(`xxs`, `--btn-width: 96%`)}
			${mixinMediaQuery(`mobile`, `--btn-width: 95%`)}
			${mixinMediaQuery(`tablet`, `--btn-width: 85%`)}
			${mixinMediaQuery(`desktop`, `--btn-width: 70%`)}
			${mixinMediaQuery(`largeDesktop`, `--btn-width: 39%`)}
		}
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
		font-family: 'ArcadeClassic';
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

const Symbol = styled.div`
	font-family: 'KhoraSymbols';
	display: inline;
`;

interface IButtonProps {
	title: string;
	size?: `sm` | `lg`;
	invert?: boolean;
	iconL?: string;
	iconR?: string;
}

const Button = ({ title, size, invert, iconL, iconR }: IButtonProps) => {
	return (
		<>
			<KhoraButton invert={invert} className={size}>
				<Symbol>{iconL}</Symbol> {title} <Symbol>{iconR}</Symbol>
			</KhoraButton>
		</>
	);
};

export default Button;
