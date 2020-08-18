import React, { useState,createContext, useContext, useCallback } from 'react'
import data from '../data';



type Products = Array<{
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

interface Product {
  id:string;
  name: string;
  detail:string;
  price: number;
  info: string;
  image:string;
  inCart: boolean;
  count: number;
  total: number;
}


interface ProductContextData {
  products: Products;
  handleDetail(id:string): void;
  addToCart(id:string):void;
  openModal(id:string):void;
  closeModal(): void;
  modalOpen: boolean;
  modalProduct: Product;
  cartSubTotal: number;
  cartTax:number;
  cartTotal:number;
  addTotals(shippingTax?: string):void;
  increment(id:string):void;
  decrement(id:string):void;
  removeItem(id:string):void;
  clearCart():void;
  cart: Products;

}

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

const ProductProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Products>([...data]);
  const [cart, setCart] = useState<Products>([])
  const [modalOpen,setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({} as Product);
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
    setModalProduct({...product})
  },[getItem])

  const addToCart = useCallback((id: string) => {
    let tempProducts = [...products];
    const [product] = tempProducts.filter(product => product.id === id);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setModalProduct({...product})
    setProducts([...tempProducts])
    setCart([...cart,product])
  },[cart, products])

  const openModal = useCallback(id=> {
    const product = getItem(id);
    if(!product){
      return;
    }
    setModalProduct({...product});
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



  const addTotals = useCallback((shippingTax = "5") => {
    const subTotal = cart.reduce((total, item) => total+=item.total, 0).toFixed(2);
    const total = cart.reduce((total, item) => total+=item.total, Number(shippingTax)).toFixed(2);
    setCartTotal(parseFloat(total))
    setCartSubTotal(parseFloat(subTotal))
  },[cart]);

  const clearCart = useCallback(() => {
    setCart([]);
    setProducts([...data]);
  }, [])

  return (
    <ProductContext.Provider value={{
      products,
      addToCart,
      handleDetail,
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
      clearCart,
      cart,
      addTotals
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