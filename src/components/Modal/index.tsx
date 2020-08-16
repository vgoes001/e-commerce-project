import React from 'react';
import { useProduct } from '../../hooks/product'
import {FiChevronLeft} from 'react-icons/fi'
import { Container,HeaderTitle ,ModalContainer, ModalHeaderContainer, HeartIcon, Content, ContentLeft, ContentRight, ButtonContainer } from './styles';
import Button from '../Button'


const Modal: React.FC = () => {
  const { modalOpen, closeModal, modalProduct,addToCart } = useProduct();
  const {image, name, price, detail, info, id, inCart } = modalProduct;
  return (
    <>
        {!modalOpen ? 
        null :
          <Container >
            <ModalContainer >
              <ModalHeaderContainer>
                <HeaderTitle onClick={() => closeModal()}>
                  <FiChevronLeft/>
                  <h1>BACK TO ALL PLANTS</h1>
                </HeaderTitle>
                <HeartIcon />
              </ModalHeaderContainer>

              <Content>
                <ContentLeft  myURL= {image} />
                <ContentRight>
                  <h1>{name}</h1>
                  <h3>{detail}</h3>
                  <span>${price}</span>
                  <p>{info}</p>
                  <ButtonContainer>
                    <Button disabled={inCart} onClick={() => addToCart(id)}>{inCart ? 'IN CART': 'ADD TO CART'}</Button>
                    <Button>WISHLIST</Button>
                </ButtonContainer>
                </ContentRight>
              </Content>
            </ModalContainer>
        </Container>
        }
    </>
  );
}

export default Modal;