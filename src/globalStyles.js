import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: "Kanit";
    margin: 0;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  a {
    color: inherit;
    text-decoration: none;
    /* transition: all 0.2s ease-in-out; */
    &:visited {
      color: inherit;
    }
    &:hover {
      color: #253DA1
    }
  }
`

export default GlobalStyle;