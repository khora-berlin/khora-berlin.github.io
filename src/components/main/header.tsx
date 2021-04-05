import * as React from 'react'
import styled from 'styled-components'
import { ReactFitty } from 'react-fitty'

const KhoraHeader = styled.header`
	background: #fc3638;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 0 1em 0;
`

const KhoraTitle = styled.div`
	font-family: 'ArcadeClassic';
	width: 50%;
	margin-bottom: 0;
`

const KhoraSubTitle = styled.div`
	width: 50%;
	font-family: 'ArcadeClassic';
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
			</KhoraTitle>
			<KhoraSubTitle>
				<SubText>YOUR FAVOURITE FOOD DELIVERY COLLECTIVE</SubText>
			</KhoraSubTitle>
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
