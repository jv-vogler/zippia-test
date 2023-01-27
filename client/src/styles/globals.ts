import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: "Open Sans", sans-serif;
    color: #333;
    background-color: #f5f5f5;
  }
`
export default GlobalStyle