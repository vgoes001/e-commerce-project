import React, {useCallback} from 'react';
import { Card, Content,ImageContainer } from './styles';
import { useProduct } from '../../hooks/product';

interface ProductProps{
    id: string;
    name: string;
    detail:string;
    price: number;
    info: string;
    image:string;
    inCart: boolean;
}

const Product: React.FC<ProductProps> = ({id, name, image,detail, price, info, inCart}) => {
  const { openModal } = useProduct();

  const truncate = useCallback((str:string, n: number)=> {
    return str?.length > n ? str.substr(0, n- 1) + '...': str
  },[]);
  return (
      <Card onClick={() => openModal(id)}>
        <ImageContainer>
          <img src={image} alt={name}/>
        </ImageContainer>
        <Content>
          <h1>{name}</h1>
          <p>{truncate(info, 200)}</p>
          <span>${price}</span>
        </Content>
      </Card>
  );
}

export default Product;