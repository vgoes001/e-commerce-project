import React from 'react';
import { useProduct } from '../../hooks/product'

import { Container, ModalContainer } from './styles';

const Modal: React.FC = () => {
  const { modalOpen, closeModal, modalProduct } = useProduct();
  const [{image, name,price }] = modalProduct;
  console.log(modalOpen);
  return (
    <>
        {!modalOpen ? 
        null :
          <Container >
          <ModalContainer>
            <h1>Item added to the Cart</h1>
            <img src={image} alt={name}/>
            <h5>{name}</h5>
            <h5>price: ${price} </h5>
          </ModalContainer>
        </Container>
        }
    </>
  );
}

export default Modal;