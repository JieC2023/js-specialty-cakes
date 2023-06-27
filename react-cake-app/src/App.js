import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Cart } from './pages/Cart';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {ShopContextProvider} from './context/shopContext'

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
