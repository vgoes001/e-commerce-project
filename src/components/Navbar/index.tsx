import React from 'react';
import { Link } from 'react-router-dom';
import { Container,ContainerGroup, Nav, HomeIcon,CartIcon } from './styles';

const Navbar: React.FC = () => {
  return (
        <Container>
          <Nav >
          <Link to="/">
            <HomeIcon />
          </Link>
          <ContainerGroup>
            <button>Products</button>
            <button><CartIcon/>Cart</button>
            </ContainerGroup>
          </Nav>
          </Container>
      
  )
  
}

export default Navbar;