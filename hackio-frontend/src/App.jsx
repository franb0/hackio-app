import './App.css';
import Header from './components/header/header';
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Header />
            <Cart />
            <Footer />
          </>}>
          </Route>

          <Route path='/cart' element={<>
            <Header />
          </>}>
            
          </Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
