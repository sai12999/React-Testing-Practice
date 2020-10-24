import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteGeneratorComponent from './QuoteGeneratorComponent/QuoteGeneratorComponent';

function App() {
  return (
    <div className="App" data-test='component-app'>
      <QuoteGeneratorComponent></QuoteGeneratorComponent>
    </div>
  );
}

export default App;
