// import styled from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

$ff-primary: 'Poppins', sans-serif;
$ff-body: 'Roboto', sans-serif;
$ff-accent: 'Roboto Mono', monospace;

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
`;
