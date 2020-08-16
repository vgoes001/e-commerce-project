import React from 'react';
import { Container, Title } from './styles';
import { useProduct } from '../../hooks/product';
import CartItem from '../CartItem';



const CartList: React.FC = () => {
  const { cart } = useProduct();


  return (
    <Container>
      <Title>
        <h1>Shopping Cart</h1>
        <h1>{cart.length} items</h1>
      </Title>
        <table>
          <thead>
            <tr>
              <th>PRODUCT DETAILS</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map( (item) => <CartItem key={item.id} item={item} />)}
          </tbody>
        </table>
    </Container>

  );
}

export default CartList;