import styled from 'styled-components';
import { FaStoreAlt, FaShoppingCart } from 'react-icons/fa'


export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: var(--secondary);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 800px;
  height: 60px;

  > h3{
    color: var(--secondary);
  }
`;
export const ContainerGroup = styled.div`
  display: flex;
  align-items: center;

  a{
    text-decoration: none;
  }


  button{
    display: flex;
    justify-content: center;
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 0px;
    color: #515151;
    text-transform: uppercase;
    width: 125px;
    font-family: inherit;
    margin-right: 5px;
    font-weight: 500;
    height: 33px;

    &:hover {
      background: darken(white, 2%);
      border: 1px solid #aedaa6;
      color: #aedaa6;
      cursor: pointer;

      > svg{
        background: darken(white, 2%);
        color: #aedaa6;
        cursor: pointer;
      }
    }


    }
`;


export const HomeIcon = styled(FaStoreAlt)`
  height: 30px;
  width: 30px;
  color: var(--gray);

  &:hover {
      background: darken(white, 2%);
      color: #aedaa6;
      cursor: pointer;       
    }

`;
export const CartIcon = styled(FaShoppingCart)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  color: var(--gray);

  


`;