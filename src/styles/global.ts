import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: var(---primary);
    color: var(--dark);
  }
  body,input,button{
    font-family: "Oswald", serif
  }
  button{
    cursor: pointer;
  }
  :root{
    --primary: #fff;
    --secondary: #B9161A;
    --gray: #797A7F;
    --dark: #2B2B2B;
  }

`;