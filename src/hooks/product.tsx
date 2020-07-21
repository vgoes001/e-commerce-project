import React, { useState,createContext, useContext, useCallback } from 'react'
import data from '../data.json';
import details from '../details.json';

type Product = Array<{
  id:string;
  name: string;
  detail:string;
  price: string;
  info: string;
  image:string;
  inCart: string;
}>

type Details = Array<{
  id:string;
  name: string;
  detail:string;
  info: string;
  price: string;
  image:string;
  "growing-zone": string;
  "mature-height": string;
  "mature-width": string;
  "classification": string;
  "sunlight": string;
  habit: string;
  inCart: string;
}>

interface ProductContextData {
  products: Product;
  productDetail: Details;
  handleDetail(): void;
  addToCart(id:string):void;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

const ProductProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product>(data);
const [productDetail, setProductDetail] = useState<Details>(details)


  const handleDetail = useCallback(() => {
    console.log('Hello fom detail');
  },[])

  const addToCart = useCallback((id: string) => {
    console.log(`Product id ${id} added to the cart`);
  },[])



  return (
    <ProductContext.Provider value={{products,addToCart, handleDetail, productDetail}}>
      {children}
    </ProductContext.Provider>
  )
}

function useProduct():ProductContextData{
  const context = useContext(ProductContext);

  if(!context){
    throw new Error('useProduct must be used within an ProductProvider');
  }

  return context;
}
export {ProductProvider, useProduct}