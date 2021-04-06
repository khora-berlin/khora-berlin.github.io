import { createGlobalStyle } from 'styled-components'
import ArcadeClassic from './ArcadeClassic.woff2'
import KhoraSymbols from './KhoraSymbols.woff2'

export default createGlobalStyle`
    @font-face {
       font-family: 'KhoraSymbols';
       src: url('${KhoraSymbols}') format('woff2');
    }
    @font-face {
        font-family: 'ArcadeClassic';
        src: url('${ArcadeClassic}') format('woff2');
    }
`
