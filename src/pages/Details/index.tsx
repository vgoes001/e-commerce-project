import React, { useEffect } from 'react';
import { useProduct } from '../../hooks/product'
import Button from '../../components/Button'
import { Link } from 'react-router-dom';


import { Container,Wrapper, Card,NavContainer, DetailsContainer, ArroLeftIcon } from './styles';

const Details: React.FC = () => {

  const { productDetail,addToCart, openModal } = useProduct();

 


  return (
    <Container>
        <Card >
            <NavContainer>
              <Link to="/" >
                <ArroLeftIcon/>
                <span>BACK TO ALL PLANTS</span>
              </Link>
            </NavContainer>
          <Wrapper>
            <img src={productDetail[0].image} alt={productDetail[0].name}/> 
            <DetailsContainer>
              <h2>{productDetail[0].detail}</h2>
              <p>{productDetail[0].info}</p>
              <span>${productDetail[0].price}</span>
              <Button 
              disabled={productDetail[0].inCart=== true ? true: false} 
              onClick={()=>{
                addToCart(productDetail[0].id);
                openModal(productDetail[0].id);
              }}>
                {`${productDetail[0].inCart === false ? 'ADD TO CART': 'IN CART'}`}
              </Button>
            </DetailsContainer>
          </Wrapper>
        </Card>
    </Container>
    )
}

export default Details;