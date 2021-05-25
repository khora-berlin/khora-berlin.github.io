import { createGlobalStyle, css } from 'styled-components';
import ArcadeClassic from '../../fonts/ArcadeClassic.woff2';
import KhoraSymbols from '../../fonts/KhoraSymbols.woff2';
import OpenSansRegular from '../../fonts/OpenSans-Semibold.woff2';
import styled from 'styled-components';

interface Breakpoints {
  xxs: string
	mobile: string;
	tablet: string;
	desktop: string;
	largeDesktop: string;
}

type Breakpoint = keyof Breakpoints;

const breakpoints: Breakpoints = {
  xxs: `100px`,
	mobile: `300px`,
	tablet: `786px`,
	desktop: `992px`,
	largeDesktop: `1200px`,
};

export const mixinMediaQuery = (key: Breakpoint, style: string) => {
	let styles = `@media (min-width: ${breakpoints[key as keyof typeof breakpoints]}){${style}}`;
	return css`
		${styles}
	`;
};

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'KhoraSymbols';
      src: url('${KhoraSymbols}') format('woff2');
      font-display: swap;
  }
  @font-face {
      font-family: 'OpenSans';
      src: url('${OpenSansRegular}') format('woff2');
      font-display: swap;
  }
  @font-face {
      font-family: 'ArcadeClassic';
      src: url('${ArcadeClassic}') format('woff2');
      font-display: swap;
  }
  *{
    --main-bg-color: #fc3638;
    --main-fg-color: white;
    --main-gap: 4vh;
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
      
    body{
      width: 100%;
      font-family: 'OpenSans';
      min-height: 100vh;      
      font-size: 16px;
    }
  }
  h1{
    font-size: 2em;
    margin-bottom: 40px;
  }
  h2{
    margin-top: 20px;
    font-size: 1.2em;
    text-decoration: underline;
  }
  a:link, a:hover, a:visited {
    text-decoration: none;
    color: inherit;
  }
  a:hover{
    text-decoration: underline;
  }
  article{    
    margin: 20px 0;
    line-height: 30px;
  }
`;

export const SiteContent = styled.div`
	background: var(--main-bg-color);
	color: var(--main-fg-color);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: var(--main-gap);
	min-height: 100vh;
	max-width: 800px;
	margin: 0 auto;
`;

export const Main = styled.main`
	height: 100%;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	article p {
		max-width: 80%;
		margin: 0 auto;
	}
	a {
		font-family: 'ArcadeClassic';
	}
`;

export const MediaContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	z-index: 2;
	padding: 2em 0;
	margin: 5px 0 30px;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: #ffffff;
		transform: skew(0, -3deg);
		height: 100%;
	}
`;
export default GlobalStyle;
