import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: var(--primary);
    color: var(--dark);
  }
  body,input,button{
    font-family: "Raleway", serif
  }
  button{
    cursor: pointer;
  }
  :root{
    --primary:#aedaa6;
    --secondary: #fff;
    --lightgray: #efefef;
    --mediumgray: #d9d9d9;
    --gray: #727272;
    --darkgray: #515151;
  }

`;