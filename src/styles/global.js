import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #353940;
    color: #FFF;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
  }

  input, button{
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
