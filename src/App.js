import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter } from 'react-router-dom';
import routes from './router'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        { routes }
      </HashRouter>
    </div>
  );
}

export default App;
