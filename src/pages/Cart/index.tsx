import React from 'react';

import { Container } from './styles';
import CartNav from '../../components/CartNav';
import CartList from '../../components/CartList';

const Cart: React.FC = () => {
  return (
    <Container>
      <CartNav />
      <CartList />
    </Container>
  
  );
}

export default Cart;