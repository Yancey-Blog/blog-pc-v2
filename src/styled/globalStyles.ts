import { createGlobalStyle } from 'styled-components'
import { ALI_OSS_URL } from 'src/shared/constants'
import cur from 'src/static/images/normal.cur'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Ubuntu';
  src: url('${ALI_OSS_URL}/fonts/Ubuntu-Regular.woff2') format('woff');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}

  @font-face {
    font-family: 'Ubuntu';
    src: url('${ALI_OSS_URL}/fonts/Ubuntu-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: bold;
    font-display: fallback;
  }

  @font-face {
    font-family: 'SFMono-Regular';
    src: url('${ALI_OSS_URL}/fonts/SFMono-Regular.otf') format('opentype');
    font-style: normal;
    font-weight:400;
    font-display: fallback;
  }

  html {
    font-size: 15px;
  }


  body {
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    -webkit-font-smoothing: antialiased;  
    background: ${({ theme }: { theme: any }) => theme.background.primary};
    color: ${({ theme }: { theme: any }) => theme.text.primary};  
    cursor: url(${cur}), auto;  
  }

  a {
    color: ${({ theme }: { theme: any }) => theme.text.secondary};
    text-decoration: none;
  }  

  p, figure {
    margin: 0
  } 

  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
    margin-bottom: 1rem;
  }

  button {
    outline: none;
  }

  pre {
    padding: 1.2rem !important;
    line-height: 1.6;
    background-color: rgb(41, 45, 62) !important;
  }

  code {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  }
`

export default GlobalStyle
