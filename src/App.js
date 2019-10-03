import React from 'react';
import './App.css';
import { TopMenu, Footer } from './Components/Layouts';
import Maincontent from './Components/Maincontent';

function App() {
  return (
    <div className="App section-style">
      <>
        <TopMenu />
        <Maincontent />
        <Footer />
      </>
    </div>
  );
}

export default App;
