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
    border-radius: 2px;
    padding: 2px 8px;
    background: transparent;
    margin-left: 15px;
    margin-right: 5px;
    transition: all 0.5s ease-in-out;
    border:0;
    outline: 0;
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