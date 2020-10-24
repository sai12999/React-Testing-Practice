import React from 'react';
import './App.css';
import QuoteGeneratorComponent from './QuoteGeneratorComponent/QuoteGeneratorComponent';
import ReduxThunkComponent from './ReduxThunkComponent/ReduxThunkComponent';

function App() {
  return (
    <div className="App" data-test='component-app'>
      <QuoteGeneratorComponent></QuoteGeneratorComponent>
      <ReduxThunkComponent></ReduxThunkComponent>
    </div>
  );
}

export default App;
