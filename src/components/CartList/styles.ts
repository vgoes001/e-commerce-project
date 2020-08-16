import styled from 'styled-components';

export const Container = styled.div`

  max-width: 800px;
  padding: 20px;
  background: var(--secondary);
  border-bottom: 1px solid var(--mediumgray);
  

  table{
    width: 100%;
    text-align: right;
  }

  th{
    color: var(--darkgray);
    text-transform: uppercase;
    font-size: 12px;
  }

  th:nth-child(1){
    text-align: left;
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
  