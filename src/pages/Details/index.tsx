import React from 'react';
import { useProduct } from '../../hooks/product'
import Button from '../../components/Button'
import { Link } from 'react-router-dom';


import { Container,Wrapper, Card,NavContainer, DetailsContainer, ArroLeftIcon } from './styles';

const Details: React.FC = () => {

  const { modalProduct,addToCart, openModal } = useProduct();
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
            <img src={modalProduct.image} alt={modalProduct.name}/> 
            <DetailsContainer>
              <h2>{modalProduct.detail}</h2>
              <p>{modalProduct.info}</p>
              <span>${modalProduct.price}</span>
              <Button 
              disabled={modalProduct.inCart} 
              onClick={()=>{
                addToCart(modalProduct.id);
                openModal(modalProduct.id);
              }}>
                {`${modalProduct.inCart ? 'IN CART': 'ADD TO CART'}`}
              </Button>
            </DetailsContainer>
          </Wrapper>
        </Card>
    </Container>
    )
}

export default Details;