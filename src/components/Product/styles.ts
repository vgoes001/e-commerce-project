import styled from 'styled-components';

export const Card = styled.div`
  width: 250px;
  background: var(--secondary);
  margin: 10px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
  transition: all 0.3s;
  &:hover {
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
`;



export const Content = styled.div`
  height: 250px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;


  h1{
    color: #727272;
    font-size: 16px;
  }

  p{
    text-align: justify;
    text-justify:inter-word;
    font-size: 12px;
    line-height: 20px;
    color: #727272;
    padding: 20px 0;

  }

  span{
    text-align: center;

  }
`;

export const ImageContainer = styled.div`
  img{
    width:100%;
    height: 250px;
    object-fit: contain;
    object-position: center;
  }

`;
