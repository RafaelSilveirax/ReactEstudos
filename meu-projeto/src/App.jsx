import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Footer } from './components/layout/Footer';
import { NavBar } from './components/layout/NavBar';
import { Contato } from './components/pages/Contato';
import { Empresa } from './components/pages/Empresa';
import { Home } from './components/pages/Home';




function App() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
