import styled from 'styled-components';
import {FaRegHeart} from 'react-icons/fa';

interface contentLeftProps{
  myURL: string;
}

export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 700px;
  
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
  &:hover {
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

`;

export const ModalHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 10px 20px;
  border-bottom: 2px solid var(--mediumgray);
  `;

export const HeaderTitle = styled.div`
    display:flex;
    align-items:center;
    h1{
      font-size: 12px;
      margin-left: 5px;
      color: var(--gray);
    }

    &:hover{
      cursor: pointer;
    }
`;

export const HeartIcon = styled(FaRegHeart)`
  height: 24px;
  width: 24px;
  color: var(--gray);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    fill:red;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 350px;



`;

export const ContentLeft = styled.div<contentLeftProps>`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;

  background-image: url(${props => props.myURL});
  background-position: center;
  background-size: cover;

`;

export const ContentRight = styled.div`
  padding: 18px 22px;
  width: 60%;
  text-align: justify;
  text-justify: inter-word;



  h1{
      font-size: 16px;
      color: var(--darkgray);
      text-transform: uppercase;
    }
  h3{
    font-size: 12px;
    color: var(--gray);
    text-transform: uppercase;
  }

  span{
    font-size: 24px;
    color: var(--darkgray);
    margin: 20px 0;
    display: block;
  }

  p{
    color: var(--gray);
    line-height: 20px;

  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;