import React from 'react';
import './App.css';
import NavigationBar from './Components/Regions/Navigation/Navigation';
import Footer from './Components/Regions/Footer/Footer';
import Services from './Components/Regions/Services/Services';
import About from './Components/Regions/About/About';

function App() {
  return (
    <React.Fragment>
      {/* < NavigationBar /> */}
      {/* <Services /> */}
      < About />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
