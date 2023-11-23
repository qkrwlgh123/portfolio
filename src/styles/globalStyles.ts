import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/font.css';

const GlobalStyles = createGlobalStyle` 
  ${reset} 
    body {
        font-family: 'NanumGothic-Regular';
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        font-family: 'NanumGothic-Regular';
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
