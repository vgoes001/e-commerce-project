import styled from 'styled-components';

export const Container = styled.tr`

  td:nth-child(4){
    text-align: right;
  }

`;

export const ProductDetail = styled.td`
  display: flex;
  padding: 10px 0;
  height: 100px;
  margin: 20px 0;



  img{
    margin-right: 20px;
    height: inherit;
    width: 100px;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: space-evenly;

  span{
    color: var(--gray);
    cursor: pointer;
    font-size: 12px;
    width:min-content;


  }

  span:hover{
    color: var(--darkgray);
    cursor: pointer;
  }




`;


export const ProductCount = styled.td`
  button{
    border: 0;
    background: none;
    outline: none;
  }

  span{
    margin: 0 10px;
    border: 1px solid var(--mediumgray);
    padding: 5px 10px;
  }

  svg{
    color: var(--darkgray);
  }
`;