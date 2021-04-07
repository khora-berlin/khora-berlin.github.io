import * as React from 'react';
import styled from 'styled-components';
import { ReactFitty } from 'react-fitty';

const KhoraHeader = styled.header`	
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em 0;
`;

const KhoraTitle = styled.div`
	font-family: 'ArcadeClassic';
	@media only screen and (max-width: 500px) {
		width: 85%;
	}
	@media only screen and (min-width: 500px) {
		width: 80%;
	}
	@media only screen and (min-width: 600px) {
		width: 60%;
	}
	@media only screen and (min-width: 1200px) {
		width: 40%;
	}
	margin-bottom: 0;
`;

const Text = styled(ReactFitty)`
	letter-spacing: 0.5em;
	direction: rtl;
	text-indent: -0.5em;
	line-height: 1em;
`;

const Symbol = styled.div`
	font-family: 'KhoraSymbols';
	display: inline;
`;

const SubText = styled(ReactFitty)`
	letter-spacing: 0.05em;
	word-spacing: 0.1em;
	font-size: 0.5em;
`;

const Header = (props: HeaderProps) => {
	return (
		<KhoraHeader>
			<KhoraTitle>
				<Text>
					KH<Symbol>H</Symbol>RA
				</Text>
				<SubText>{props.siteSubTitle}</SubText>
			</KhoraTitle>
		</KhoraHeader>
	);
};

interface HeaderProps {
	siteSubTitle?: string;
}

Header.defaultProps = {
	siteSubTitle: ``,
};

export default Header;
