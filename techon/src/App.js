import React from 'react';
import './App.css';
import NavigationBar from './Components/Regions/Navigation/Navigation';
import Footer from './Components/Regions/Footer/Footer';
import Services from './Components/Regions/Services/Services';

function App() {
  return (
    <React.Fragment>
      < NavigationBar />
      <Services />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
