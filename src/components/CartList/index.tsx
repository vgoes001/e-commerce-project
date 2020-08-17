import React, {useMemo} from 'react';
import { Container, Title } from './styles';
import { useProduct } from '../../hooks/product';
import CartItem from '../CartItem';



const CartList: React.FC = () => {
  const { cart, clearCart } = useProduct();

  const cartQtd = useMemo(() => cart.length, [cart]);
  return (
    <Container>
      <Title>
        <h1>Shopping Cart</h1>
        <h1>{cartQtd} items</h1>
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
        <button onClick={() => clearCart()}>Clear Cart</button>
    </Container>

  );
}

export default CartList;