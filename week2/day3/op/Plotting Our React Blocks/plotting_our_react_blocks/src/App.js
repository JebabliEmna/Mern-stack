import React from 'react';
import './App.css';
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Subcontents from './components/Subcontents';
import Navigation from './components/Navigation';
import Main from './components/Main';
                
function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
      <Subcontents />
      <Subcontents />
      <Subcontents />
      <Advertisement />
      </Main>
    </div>
  );
}
                
export default App;

