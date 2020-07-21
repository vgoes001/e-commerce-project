import styled from 'styled-components';

export const Container = styled.button`
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

`;

