import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <React.Fragment>
     <div>
     < NavBar />
     </div> 
     <Layout>
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </Router> */}
        {/* <Footer /> */}
      </Layout>
    
   </React.Fragment>
  );
}

export default App;