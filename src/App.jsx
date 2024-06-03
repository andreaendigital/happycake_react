import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../views/Home';
import Navegacion from './components/Navegacion';
import Contacto from "/views/Contacto";
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
     <Navegacion />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contacto />} />
     </Routes>
     <Footer/>

    </>
  )
}

export default App