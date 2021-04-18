import { createGlobalStyle, css } from 'styled-components';
import ArcadeClassic from '../../fonts/ArcadeClassic.woff2';
import KhoraSymbols from '../../fonts/KhoraSymbols.woff2';

interface Breakpoints {
	mobile: string;
	tablet: string;
	desktop: string;
	largeDesktop: string;
}

type Breakpoint = keyof Breakpoints;

const breakpoints: Breakpoints = {
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
    font-family: 'ArcadeClassic';   
    body{
      width: 100%;
      min-height: 100vh;      
      font-size: 22px;
    }
  }
  a:link, a:hover, a:visited {
    text-decoration: none;
    color: inherit;
  }
  a:hover{
    text-decoration: underline;
  }
`;
export default GlobalStyle;
