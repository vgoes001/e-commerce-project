import styled from 'styled-components';

export const Container = styled.div`

  width: 800px;

  padding: 20px 0;
  background: var(--secondary);
  border-bottom: 1px solid var(--mediumgray);

  table{
    width: 100%;
    text-align: left;
    border: 1px solid red;
  }

  th{
    color: var(--darkgray);
    text-transform: uppercase;
  }
`;