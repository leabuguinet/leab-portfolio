import './App.scss';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";


function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Route exact path="/" component={Presentation} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
