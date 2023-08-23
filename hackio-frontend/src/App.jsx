import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Cart from "./components/cart/cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Header />
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
