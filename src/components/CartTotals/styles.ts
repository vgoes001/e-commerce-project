import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  padding: 60px;
  background: var(--lightgray);
`;


export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--mediumgray);
  padding-bottom: 20px;
  margin-bottom: 20px;
  
  h1{
    color: var(--darkgray);
  }  
`;

export const OrderInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  row-gap:20px;

  h3{
    text-transform: uppercase;
    font-size: 14px;
  }
  strong{
    text-align: right;
  }

  select{
    position: relative;
    background: var(--secondary);
    color: var(--darkgray);
    padding: 10px;
    outline: none;
    border: none;
    font-size: 12px;
    line-height:50px;
  }
  input{
    border: none;
    padding: 10px;
    font-size: 12px;
    outline:none;
  }
  button{
    border: none;
    outline: none;
    background: #FA7373;
    color: #fff;
    padding: 10px 15px;
    text-transform:uppercase;
    margin-bottom: 20px;
    width: 50%;
    &:hover{
      background: darken(#FA7373, 2%);
    }
  }


`;

export const Checkout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  row-gap:20px;
  border-top: 1px solid var(--mediumgray);
  padding-top:20px;

  h3{
    text-transform: uppercase;
    font-size: 14px;
  }
  strong{
    text-align: right;
  }

  button{
    border: none;
    outline: none;
    background: #5D51DC;
    color: #fff;
    padding: 10px 15px;
    text-transform:uppercase;
    margin-bottom: 20px;
    width: 50%;

    &:hover{
      background: darken(#5D51DC, 2%);
    }
  }
`;