import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${reset};
  
  html, body {
    font-family: Roboto;
  }
  body {
    height: 100%;
    line-height: 1.5;
    background-color: #f7f7f7;
  }
`;
