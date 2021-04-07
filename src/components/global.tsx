import { createGlobalStyle } from 'styled-components';
import ArcadeClassic from '../fonts/ArcadeClassic.woff2';
import KhoraSymbols from '../fonts/KhoraSymbols.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'KhoraSymbols';
      src: url('${KhoraSymbols}') format('woff2');
  }
  @font-face {
      font-family: 'ArcadeClassic';
      src: url('${ArcadeClassic}') format('woff2');
  }
  html, body {
    --main-bg-color: #fc3638;
    --main-fg-color: white;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'ArcadeClassic';    
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a:link, a:hover, a:visited {
    text-decoration: none;
    color: inherit;
  }
  a:hover{
    text-decoration: underline;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`;
export default GlobalStyle;
