import React from 'react';
import Navbar from '../src/components/Navbar'
import ProductList from './pages/ProductList'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Default from './pages/Default'
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
    </div>
  );
}

export default App;
