import { createGlobalStyle } from 'styled-components';
import ArcadeClassic from './ArcadeClassic.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'ArcadeClassic';
        src: url('${ArcadeClassic}') format('woff2');
    }
`;