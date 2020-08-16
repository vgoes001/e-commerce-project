import React from 'react';

import { Container } from './styles';
import CartList from '../../components/CartList';

const Cart: React.FC = () => {
  return (
    <Container>
      <CartList />
    </Container>
  );
}

export default Cart;