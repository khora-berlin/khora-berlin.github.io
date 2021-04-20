import { createGlobalStyle, css } from 'styled-components';
import ArcadeClassic from '../../fonts/ArcadeClassic.woff2';
import KhoraSymbols from '../../fonts/KhoraSymbols.woff2';
import OpenSansRegular from '../../fonts/OpenSans-Semibold.woff2';

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
  }
  @font-face {
      font-family: 'OpenSans';
      src: url('${OpenSansRegular}') format('woff2');
  }
  @font-face {
      font-family: 'ArcadeClassic';
      src: url('${ArcadeClassic}') format('woff2');
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
export default GlobalStyle;
