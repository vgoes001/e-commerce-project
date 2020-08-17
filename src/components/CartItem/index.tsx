import React from 'react';

import { Container, ProductDetail, Details, ProductCount } from './styles';
import { useProduct } from '../../hooks/product';
import { FiPlus, FiMinus } from 'react-icons/fi'



interface Product {
  item: {
    id:string;
    name: string;
    detail:string;
    price: number;
    info: string;
    image:string;
    inCart: boolean;
    count: number;
    total: number;
  }
}

const CartItem: React.FC<Product> = ({item}) => {

  const { decrement, increment, removeItem} = useProduct();
  return (
    <Container>
        <ProductDetail>
          <img src={item.image} alt={item.name} />
          <Details>
            <p>{item.name}</p>
            <span onClick={() => removeItem(item.id)} >Remove</span>
          </Details>
        </ProductDetail>
      <ProductCount>
        <button onClick={() => decrement(item.id)}><FiMinus size={16}/></button>
        <span>{item.count}</span>
        <button onClick={() => increment(item.id)}><FiPlus size={16} /></button>
      </ProductCount>
      <td><strong>${item.price}</strong></td>
      <td><strong>${item.total}</strong></td>
    </Container>
  );
}

export default CartItem;