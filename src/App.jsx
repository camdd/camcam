import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'; 

/* Pick a theme of your choice */
import peggysPastels from 'react95/dist/themes/peggysPastels';

const App = () => (
  <Router>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
    <ThemeProvider theme={peggysPastels}>
      <Navbar />
      <Routes>
        <Route path="/" />  
      </Routes>
    </ThemeProvider>
  </StyleSheetManager>
  </Router>

);

export default App;
