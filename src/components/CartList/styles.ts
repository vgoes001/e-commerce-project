import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  padding: 60px;
  background: var(--secondary);
  

  table{
    width: 100%;
    text-align: center;
  }

  th{
    color: var(--darkgray);
    text-transform: uppercase;
    font-size: 12px;
  }

  th:nth-child(1){
    text-align: left;
  }
  th:nth-child(4){
    text-align: right;
  }

  > button{
    border: none;
    outline: none;
    background: #FA7373;
    color: #fff;
    padding: 10px 15px;
    text-transform:uppercase;
    margin-top: 20px;
    width: 25%;

    &:hover{
      background: darken(#FA7373, 2%);
    }
  }  
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
  