import {createGlobalStyle} from 'styled-components';
import {colorSchema} from '@lib/constants';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: 100%;
  }

  body {
    scrollbar-width: auto; /* отображение скролл-баров */
    -webkit-scrollbar: auto; /* отображение скролл-баров */

    font-family: Helvetica Neue, Helvetica, Arial;
    
    background-color: ${colorSchema.primaryBg};
  }

  span {
    display: block;
  }

  ul {
    list-style: none
  }

  a, a:checked {
    color: inherit;
    text-decoration: none;
  }

  input, button, textarea {
    outline: none;
    border: none;
    -webkit-text-size-adjust: 100%;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  img {
    user-select: none;
    pointer-events: none;
  }
`;