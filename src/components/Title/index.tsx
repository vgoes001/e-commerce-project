import React from 'react';

import { Container } from './styles';

interface TitleProps {
  title: string;
}


const Title: React.FC<TitleProps> = ({title}) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

export default Title;