import React from 'react';

import { Container } from './styles';

const CartList: React.FC = () => {
  return (
    <Container>
        <table>
          <thead>
            <tr>
              <th>PRODUCT DETAILS</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FIFA 19</td>
              <td>2</td>
              <td>44.00</td>
              <td>88.00</td>
            </tr>
            <tr>
              <td>Platinum Headset</td>
              <td>1</td>
              <td>119.99</td>
              <td>119.99</td>
            </tr>
          </tbody>
        </table>
    </Container>

  );
}

export default CartList;