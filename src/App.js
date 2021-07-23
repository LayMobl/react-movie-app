import React from 'react';
//Styles
import { GlobalStyle } from './GlobalStyle';
//Components
import Header from './components/Header';
import Home from "./components/Home";

const App = () => (
  <div>
      <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
