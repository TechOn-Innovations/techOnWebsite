import React from 'react';
import './App.css';
import NavigationBar from './Components/Regions/Navigation/Navigation';
import Services from './Components/Regions/Services/Services';
import Home from './Components/Regions/Home/Home';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home />
      <Services />
    </React.Fragment>
  );
}

export default App;
