import React, { useMemo } from 'react';

import { Container, Title, OrderInfo, Checkout } from './styles';
import { useProduct } from '../../hooks/product';


const CartTotals: React.FC = () => {
  const { cart, cartSubTotal, cartTax, cartTotal, standardDelivery } = useProduct();

  const cartQtd = useMemo(() => cart.length, [cart]);

  return (
    <Container>
      <Title>
        <h1>Order Summary</h1>
      </Title>
      <OrderInfo>
        <h3>Items {cartQtd}</h3>
        <strong>${cartTotal}</strong>
        <h3>Shipping</h3>
        <select>
          <option>Standard Delivery - $5.00</option>
          <option>Fast Delivery - $15.00</option>
          <option>Premium Delivery - $25.00</option>
        </select>
        <h3>Promo Code</h3>
        <input type="text" placeholder="Enter your code"/>
        <button>Apply</button>
      </OrderInfo>
      <Checkout>
        <h3>Total Cost</h3>
        <strong>${cartTotal}</strong>
        <button>Checkout</button>
      </Checkout>

    </Container>
  );
}

export default CartTotals;