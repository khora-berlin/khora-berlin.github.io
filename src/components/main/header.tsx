import * as React from 'react'
import styled from 'styled-components'
import { ReactFitty } from 'react-fitty'

const KhoraHeader = styled.header`
	background: #fc3638;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em 0 1em 0;
`

const KhoraTitle = styled.div`
	font-family: 'ArcadeClassic';
	@media only screen and (max-width: 600px) {
		width: 80%;
	}
	@media only screen and (min-width: 600px) {
		width: 50%;
	}
	margin-bottom: 0;
`

const Text = styled(ReactFitty)`
	letter-spacing: 0.5em;
	direction: rtl;
	text-indent: -0.5em;
	line-height: 1em;
`

const Symbol = styled.div`
	font-family: 'KhoraSymbols';
	display: inline;
`

const SubText = styled(ReactFitty)`
	letter-spacing: 0.05em;
	word-spacing: 0.1em;
	font-size: 0.5em;
`

const Header = (props: HeaderProps) => {
	return (
		<KhoraHeader>
			<KhoraTitle>
				<Text>
					KH<Symbol>H</Symbol>RA
				</Text>
				<SubText>YOUR FAVOURITE FOOD DELIVERY COLLECTIVE</SubText>
			</KhoraTitle>
		</KhoraHeader>
	)
}

interface HeaderProps {
	siteTitle?: string
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
