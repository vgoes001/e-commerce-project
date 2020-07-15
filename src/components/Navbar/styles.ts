import styled, { css } from 'styled-components';
import { FaStoreAlt, FaShoppingCart } from 'react-icons/fa'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--gray);


`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 60px;

  > h3{
    color: var(--secondary);
  }
`;
export const ContainerGroup = styled.div`
  display: flex;
  align-items: baseline;

  > button{
    border: 0;
    background: transparent;
    margin-left: 15px;
    margin-right: 5px;
  }

`;


export const HomeIcon = styled(FaStoreAlt)`
  height: 30px;
  width: 30px;
  color: var(--dark);
`
export const CartIcon = styled(FaShoppingCart)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  color: var(--secondary);


  
 

`;