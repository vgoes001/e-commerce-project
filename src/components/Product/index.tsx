import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index';
import { Card,NavTitle, Content,ImageContainer,Description, HeartIcon } from './styles';
import { useProduct } from '../../hooks/product';

interface ProductProps{
    id: string;
    name: string;
    detail:string;
    price: number;
    info: string;
    image:string;
    inCart: boolean;
}

const Product: React.FC<ProductProps> = ({id, name, image,detail, price, info, inCart}) => {
  const { handleDetail, addToCart, openModal } = useProduct();
  return (
      <Card>
        <NavTitle>
          <h1>{name}</h1>
          <HeartIcon />
        </NavTitle>
        <Content>
            <Link to="/details">
              <ImageContainer onClick ={() => {
                handleDetail(id);
                openModal(id);
              }}>
               <img src={image} alt={name} />
              </ImageContainer>
            </Link>
          <Description >
            <h2>{name}</h2>
            <h4>{detail}</h4>
            <h1>${price}</h1>
            <p>{info}</p>
            <Button 
              disabled={inCart ? true: false} 
              onClick={()=>addToCart(id)}>
                {`${inCart ? 'IN CART': 'ADD TO CART'}`}
              </Button>
          </Description>
        </Content>
      </Card>
  );
}

export default Product;