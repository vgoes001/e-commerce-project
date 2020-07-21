import React, { useEffect } from 'react';
import { useProduct } from '../../hooks/product'
import Button from '../../components/Button'
import { Link } from 'react-router-dom';


import { Container,Wrapper, Card,NavContainer, DetailsContainer, ArroLeftIcon } from './styles';

const Details: React.FC = () => {

  const { productDetail,addToCart } = useProduct();

  useEffect(()=> {
  }, [productDetail])
  return (
    <Container>
      {productDetail.map( product => (
        <Card key={product.id}>
            <NavContainer >
              <Link to="/" >
                <ArroLeftIcon/>
                <span>BACK TO ALL PLANTS</span>
              </Link>
            </NavContainer>
  
          <Wrapper>
            <img src={product.image} alt={product.name}/> 
            <DetailsContainer>
              <h2>{product.detail}</h2>
            <p>{product.info}</p>
              <span>${product.price}</span>
              <p>Classification:</p>
              <span>{product.classification}</span>
              <p>Mature Height</p>
              <p>{product["mature-height"]}</p>
              <p>Mature Width</p>
              <p>{product["mature-width"]}</p>
              <p>Sunlight</p>
              <p>{product.sunlight}</p>
              <Button 
              disabled={product.inCart=== 'true' ? true: false} 
              onClick={()=>addToCart(product.id)}>
                {`${product.inCart === 'false' ? 'ADD TO CART': 'IN CART'}`}
              </Button>
              

            </DetailsContainer>

          </Wrapper>
        </Card>

      ))}
    </Container>
  );
}

export default Details;