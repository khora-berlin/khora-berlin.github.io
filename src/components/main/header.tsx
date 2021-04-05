import { Link } from "gatsby"
import * as React from "react"
import styled from 'styled-components';
import { ReactFitty } from 'react-fitty';

const KhoraHeader = styled.header`
  background: #FC3638;
  color: white;
  margin-bottom: 1.45rem;
  text-align: center;
`;

const KhoraTitle = styled.div`
  font-family: 'ArcadeClassic';
  width: 50%;
	text-align-last: justify;
`

const KhoraSubTitle = styled.div`
  font-size: 0.7em;
  width: 50%;
  font-family: 'ArcadeClassic';
`

const Text = styled(ReactFitty)`
  letter-spacing: 0.1em;
  padding-right: -1em;
`

const SubText = styled(ReactFitty)`
  letter-spacing: 0.05em;
`

const Header = (props: HeaderProps) => (
  <KhoraHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <KhoraTitle>
          <Text>{props.siteTitle}</Text>
        </KhoraTitle>
        <KhoraSubTitle>
          <SubText>YOUR FAVOURITE FOOD DELIVERY COLLECTIVE</SubText>
        </KhoraSubTitle>
      </h1>
    </div>
  </KhoraHeader>
)

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
