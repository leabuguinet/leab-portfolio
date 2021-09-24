import './App.scss';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";

import React from 'react';
import LangChoice from './components/LangChoice';


function App() {

  

  return (

    <BrowserRouter>

      <div>
        <Header />

        <main>
          <Nav />
        
          <Route exact path="/" component={Presentation} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

        </main>
        
      </div>

    </BrowserRouter>
    
  );
}

export default App;
