import React from 'react';
import { Link } from 'react-router-dom';


import { Container,Content } from './styles';

interface ProductProps{
    name: string;
    detail:string;
    price: string;
    info: string;
    image:string;
}

const Product: React.FC<ProductProps> = ({name, image}) => {
  return (
    <Container>
      <img src={image} alt={name}/>
      <Content>

      </Content>
    </Container>
  );
}

export default Product;