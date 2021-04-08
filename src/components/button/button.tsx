import * as React from 'react';
import styled from 'styled-components';

interface IKhoraButtonProps {
	invert?: boolean;
	className: string;
}

const KhoraButton = styled.button.attrs(props => ({
	className: props.className,
}))`
	font-family: 'ArcadeClassic';

	&.lg {
		@media only screen and (max-width: 500px) {
			--btn-width: 85%;
		}
		@media only screen and (min-width: 500px) {
			--btn-width: 80%;
		}
		@media only screen and (min-width: 600px) {
			--btn-width: 60%;
		}
		@media only screen and (min-width: 800px) {
			--btn-width: 60%;
		}
		@media only screen and (min-width: 1200px) {
			--btn-width: 40%;
		}
		--btn-height: 60px;
		--btn-font-size: 1.6em;
	}

	&.sm {
		@media only screen and (max-width: 500px) {
			--btn-width: 30%;
		}
		@media only screen and (min-width: 500px) {
			--btn-width: 40%;
		}
		@media only screen and (min-width: 600px) {
			--btn-width: 16%;
		}
		@media only screen and (min-width: 800px) {
			--btn-width: 16%;
		}
		@media only screen and (min-width: 1200px) {
			--btn-width: 15%;
		}
		--btn-height: 50px;
		--btn-font-size: 0.9em;
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
	&:before,
	&:after {
		content: '';
		z-index: 1;
		position: absolute;
		top: calc(var(--btn-height) / -2);
		width: 0;
		height: 0;
		border-style: solid;
		border-color: transparent ${(props: IKhoraButtonProps) => (props.invert ? `white` : `#fc3638`)}
			transparent transparent;
	}
	&:before {
		border-width: var(--btn-height) 18px var(--btn-height) 0;
		transform: rotate(180deg);
		left: -1px;
	}
	&:after {
		border-width: var(--btn-height) 18px var(--btn-height) 0;
		right: -1px;
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
