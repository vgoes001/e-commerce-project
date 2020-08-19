import React, { useState,createContext, useContext, useCallback, useEffect } from 'react'
import axios from 'axios';



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

  

  const fetchData = useCallback(async () => {
    const response = await axios.get('https://api.jsonbin.io/b/5f3c7243af209d1016be5fba/1');
    setProducts(response.data)
  },[]);
  useEffect(() => {
    fetchData();
    
  }, [fetchData])


  const [products, setProducts] = useState<Products>([]);
  const [cart, setCart] = useState<Products>([])
  const [modalOpen,setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({} as Product);
  const [cartSubTotal, setCartSubTotal] = useState(0);
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

  const addTotals = useCallback((shippingTax = "5") => {
    const subTotal = cart.reduce((total, item) => total+=item.total, 0).toFixed(2);
    const total = cart.reduce((total, item) => total+=item.total, Number(shippingTax)).toFixed(2);
    setCartTotal(parseFloat(total))
    setCartSubTotal(parseFloat(subTotal))
  },[cart]);

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
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    if(!selectedProduct){
      console.error('Product not found!');
      return;
    }
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = parseFloat((product.count * product.price).toFixed(2));
    product.total.toPrecision(2);
    setCart([...tempCart])
    addTotals()

  }, [addTotals, cart]);
  
  const removeItem = useCallback((id:string) => {
    const tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter(item => item.id !== id);
    
    const getItemById = getItem(id);
    if(!getItemById){
      console.error('Item not found!')
      return;
    }

    const index = tempProducts.indexOf(getItemById);
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals();
    
  },[addTotals, cart, getItem, products])

  const decrement = useCallback((id:string)=> {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    if(!selectedProduct){
      console.error('Product not found!');
      return;
    }
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if(product.count === 0){
      removeItem(id);
    }
    product.total = parseFloat((product.count * product.price).toFixed(2));
    addTotals();



  }, [addTotals, cart, removeItem]);







  const clearCart = useCallback(() => {
    setCart([]);
    fetchData();
    addTotals();
  }, [addTotals, fetchData])

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