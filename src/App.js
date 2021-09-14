import './App.scss';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
//import Projects from './components/Projects';
import Nav from "./components/Nav";


function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Nav />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
