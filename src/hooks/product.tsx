import React, { useState,createContext, useContext, useCallback, useEffect } from 'react'
import data from '../data';
import detail from '../detail';
import { CartIcon } from '../components/Navbar/styles';



type Product = Array<{
  id:string;
  name: string;
  detail:string;
  price: number;
  info: string;
  image:string;
  inCart: boolean;
  count: number;
  total: number;
}>



interface ProductContextData {
  products: Product;
  productDetail: Product;
  handleDetail(id:string): void;
  addToCart(id:string):void;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

const ProductProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product>(data);
  const [productDetail, setProductDetail] = useState<Product>(detail);
  const [cart, setCart] = useState<Product>([])

  const getItem = useCallback((id)=> products.find(item => item.id === id)
   , [products]);

  const handleDetail = useCallback((id) => {
    const product = getItem(id);
    if(!product){
      return;
    }
    setProductDetail([{...product}])
  },[getItem])

  const addToCart = useCallback((id: string) => {
    let tempProducts = [...products];
    const [product] = tempProducts.filter(product => product.id === id);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts([...tempProducts])
    setCart([{...cart,...product}])
  },[cart, products])

  useEffect(()=> {
    console.log(cart)
  }, [cart])



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