import './App.css';
import Header from './components/header/header';
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Slide from "./components/slide/slide";
import Products from "./components/products/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Header />
            <Slide />
            <Products />
            <Footer />
          </>}>
          </Route>

          <Route path='/cart' element={<>
            <Header />
            <Cart />
            <Footer />
          </>}>

          </Route>

          <Route path='/login' element={<>
            <Header />
            <Login />
            <Footer />
          </>}>
            
          </Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
