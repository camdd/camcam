
import React from 'react';
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/';

/* Pick a theme of your choice */
import peggysPastels from 'react95/dist/themes/peggysPastels';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={peggysPastels}>
      <Navbar/>

    </ThemeProvider>
  </div>
);

export default App;