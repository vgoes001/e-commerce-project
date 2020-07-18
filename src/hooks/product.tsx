import React, { useState,createContext, useContext, useCallback } from 'react'
import data from '../data.json';

type Product = Array<{
  id:string;
  name: string;
  detail:string;
  price: string;
  info: string;
  image:string;
  inCart: string;
}>
interface ProductContextData {
  products: Product;
  handleDetail(): void;
  addToCart():void;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

const ProductProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product>(data);

  const handleDetail = useCallback(async () => {
    console.log('Hello fom detail');
  },[])

  const addToCart = useCallback(async () => {
    console.log('Hello fom add to cart');
  },[])



  return (
    <ProductContext.Provider value={{products,addToCart, handleDetail}}>
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