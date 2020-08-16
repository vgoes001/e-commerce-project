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
          <Link to="/cart">
            <button><CartIcon/>Cart</button>
          </Link>

            </ContainerGroup>
          </Nav>
          </Container>
      
  )
  
}

export default Navbar;