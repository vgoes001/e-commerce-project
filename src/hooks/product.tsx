import React, { useState,createContext, useContext, useCallback, useEffect } from 'react'
import data from '../data';
import detail from '../detail';



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
  openModal(id:string):void;
  closeModal(): void;
  modalOpen: boolean;
  modalProduct: Product;
  cartSubTotal: number;
  cartTax:number;
  cartTotal:number;
  increment(id:string):void;
  decrement(id:string):void;
  removeItem(id:string):void;
  clearCart():void;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

const ProductProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product>(data);
  const [productDetail, setProductDetail] = useState<Product>(detail);
  const [cart, setCart] = useState<Product>([])
  const [modalOpen,setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(productDetail);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const getItem = useCallback((id)=> products.find(item => item.id === id)
  ,[products]);

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

  const openModal = useCallback(id=> {
    const product = getItem(id);
    if(!product){
      return;
    }
    setModalProduct([{...product}]);
    setModalOpen(true);
  }, [getItem]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  },[])

  const increment = useCallback((id:string)=> {
    console.log('this is increment method')
  }, []);
  const decrement = useCallback((id:string)=> {
    console.log('this is decrement method')
  }, []);

  const removeItem = useCallback((id:string) => {
    console.log('item removed')
  },[])

  const clearCart = useCallback(() => {
    console.log('cart was cleared')
  }, [])




  return (
    <ProductContext.Provider value={{
      products,
      addToCart,
      handleDetail,
      productDetail,
      modalOpen,
      openModal,
      modalProduct,
      closeModal,
      cartSubTotal,
      cartTax,
      cartTotal,
      increment,
      decrement,
      removeItem,
      clearCart
      }}>
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