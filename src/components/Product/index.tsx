import React from 'react';
import { Link } from 'react-router-dom';

import { Card,HeartIcon, ImageContainer, Description, DescriptionInfo, ContainerButton} from './styles';

interface ProductProps{
    name: string;
    detail:string;
    price: string;
    info: string;
    image:string;
}

const Product: React.FC<ProductProps> = ({name, image,detail}) => {
  return (
      <Card>
        <nav>
          <h1>CLASSIC PEACE LILY</h1>
          <HeartIcon />
        </nav>
        <Description>
          <ImageContainer>
            <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg" alt=""/>
          </ImageContainer>
          <DescriptionInfo>
            <h2>CLASSIC PEACE LILY</h2>
            <h4>POPUPLAR HOUSE PLANT</h4>
            <h1>$18</h1>
            <p>Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.</p>
            <ContainerButton>
              <button>ADD TO CART</button>
              <button>WISHLIST</button>
            </ContainerButton>
          </DescriptionInfo>
        </Description>
      </Card>

  );
}

export default Product;