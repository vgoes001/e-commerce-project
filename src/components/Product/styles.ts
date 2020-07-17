import styled from 'styled-components';
import {FaRegHeart} from 'react-icons/fa';


export const Card = styled.div`
  background: white;
  margin: 40px;
  width: 650px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: all 0.3s;
  &:hover {
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    > nav{
      display: flex;
      padding: 20px;
      justify-content: space-between;
      color: #727272;
      border-bottom: 2px solid #efefef;
      font-size: 12px;
    }
`;

export const HeartIcon = styled(FaRegHeart)`
  height: 24px;
  width: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    fill:red;
  }
`;

export const ImageContainer = styled.div`
  padding: 30px;
  >img{
    max-height: 240px; 
  }
`;

export const Description = styled.div`
  display: flex;
`

export const DescriptionInfo = styled.div`
  border-left: 2px solid #efefef;
  padding: 30px;

  > h1{
    color: #515151;
    text-transform: uppercase;
    font-weight: 300;
    padding-top: 15px;
    font-size: 30px;
  }

  >h4{
    color: #515151;
    text-transform: uppercase;
    font-weight: 500;

  }
  > p{
    font-size: 12px;
    line-height: 20px;
    color: #727272;
    padding: 20px 0;
  }



`;

export const ContainerButton = styled.div`
  > button{
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 0px;
    margin-bottom: 30px;
    color: #515151;
    text-transform: uppercase;
    width: 125px;
    font-family: inherit;
    margin-right: 5px;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      background: darken(white, 2%);
      border: 1px solid #aedaa6;
      color: #aedaa6;
      cursor: pointer;       
    }
  }

`;