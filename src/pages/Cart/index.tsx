import React from 'react';

import { Container } from './styles';
import CartList from '../../components/CartList';
import CartTotals from '../../components/CartTotals';

const Cart: React.FC = () => {
  return (
    <Container>
      <CartList />
      <CartTotals />
    </Container>
  );
}

export default Cart;