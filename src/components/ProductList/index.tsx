import React from 'react';

import { Container, List } from './styles';
import Product from '../Product'
import Title from '../Title/index'
import {useProduct} from '../../hooks/product';

const ProductList: React.FC = () => {

  const {products} = useProduct();

  return (
    <Container>
      <List>
        {products.map(product => <Product key={product.name}{...product}/>)}
      </List>
    </Container>
  );
}

export default ProductList;