import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media(min-width: 700px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 1100px){
    grid-template-columns: repeat(3, 1fr);
  }

`;



