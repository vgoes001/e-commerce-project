import React from 'react';
import Navbar from '../src/components/Navbar'
import ProductList from '../src/components/ProductList'
import Details from '../src/components/Details'
import Cart from '../src/components/Cart'
import Default from '../src/components/Default'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
    </div>
  );
}

export default App;
