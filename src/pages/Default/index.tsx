import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import { Container } from './styles';

const Default: React.FC<RouteComponentProps> = ({location} : RouteComponentProps) => {

  return (
    <Container>
      <h3>Page <span>{location.pathname}</span> not found</h3>
    </Container>
  );
}

export default Default;