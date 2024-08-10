import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'; 
import Aboutme from './pages/Aboutme/Aboutme';  
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

/* Pick a theme of your choice */
import peggysPastels from 'react95/dist/themes/peggysPastels';

const App = () => (
  <Router>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
    <ThemeProvider theme={peggysPastels}>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </ThemeProvider>
  </StyleSheetManager>
  </Router>

);

export default App;
