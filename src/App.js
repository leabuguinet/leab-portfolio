import './App.scss';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

import React from 'react';


function App() {

  return (

    <BrowserRouter>

      <div>
        <Header />

        <main>
          
          <Nav />
        
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />

        </main>

        <Footer />
        
      </div>

    </BrowserRouter>
    
  );
}

export default App;
