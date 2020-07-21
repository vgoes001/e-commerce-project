import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index';
import { Card,NavTitle, Content,ImageContainer,Description, ButtonContainer, HeartIcon } from './styles';

interface ProductProps{
    id: string;
    name: string;
    detail:string;
    price: string;
    info: string;
    image:string;
    inCart: string;
}

const Product: React.FC<ProductProps> = ({name, image,detail, price, info, inCart}) => {
  return (
      <Card>
        <NavTitle>
          <h1>{name}</h1>
          <HeartIcon />
        </NavTitle>
        <Content>
            <Link to="/details">
              <ImageContainer>
               <img src={image} alt={name} />
              </ImageContainer>
            </Link>
          <Description>
            <h2>{name}</h2>
            <h4>{detail}</h4>
            <h1>${price}</h1>
            <p>{info}</p>

          </Description>
        </Content>
      </Card>

  );
}

export default Product;