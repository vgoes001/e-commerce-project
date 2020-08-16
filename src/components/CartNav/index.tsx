import React from 'react';

import { Container, Title } from './styles';

const CartNav: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Shopping Cart</h1>
        <h1>3 items</h1>
      </Title>
    </Container>
  );
}

export default CartNav;
