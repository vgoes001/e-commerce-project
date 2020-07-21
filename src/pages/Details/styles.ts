import styled from 'styled-components';
import {FaArrowLeft} from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;

  img{
    max-width: 400px;
    border-right: 2px solid var(--lightgray);

  }

`;

export const Card = styled.div`
  
  width: 800px;
  background: var(--secondary);
  margin: 40px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: all 0.3s;
  &:hover {
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

  h1{
    color: var(--darkgray)
  }

  h2{
    color: var(--gray)
  }


`;

export const NavContainer = styled.div`
  padding: 20px;
  border-bottom: 2px solid var(--lightgray);


  a{
    text-decoration:none;
    display: flex;
    align-items: center;


  }

  span{
    font-size: 12px;
    cursor: pointer;
    color: var(--gray);



  }

`;

export const ArroLeftIcon = styled(FaArrowLeft)`
  height: 24px;
  color: var(--gray);
  margin-right: 20px;
  
  cursor: pointer;





`;

export const DetailsContainer = styled.div`
  padding: 40px;
`;
