import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>

<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App;
