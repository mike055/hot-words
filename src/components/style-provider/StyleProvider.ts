import { createGlobalStyle } from 'styled-components';

const StyleProvider = createGlobalStyle`
  body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 300;
    font-family: sans-serif;
    color: #3b3b3c;
    line-height: 1.428571429;
  }
`;

export default StyleProvider;
