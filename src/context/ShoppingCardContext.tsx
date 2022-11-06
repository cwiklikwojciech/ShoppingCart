import {createContext, ReactNode, useContext, useState} from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from '../hooks/useLocalStorage';
import storeItems from "../data/items.json"

type ShoppingCartProviderProps = {
    children: ReactNode
  }

type CartItem = { 
    id: number
    quantity: number
}
  
type ShoppingCartContext = { 
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
    openCart: () => void
    closeCart: () => void
    total: () => number
}

const ShoppingCartContext = createContext({} as 
    ShoppingCartContext)

export function useShoppingCard(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCardProvider({ children }: ShoppingCartProviderProps){
    const [isOpen, setIsOpen] = useState(true);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
      "shopping-list-items",
      []
    )

    function total(){
      let totalPrice = 0;
      cartItems.map((item) =>{
          const price = storeItems.find(itemStore => itemStore.id === item.id)?.price || 0;
          totalPrice = totalPrice + (price * item.quantity);
      })
      return totalPrice;
    }

    const openCart = () => setIsOpen(true); 
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
          if(currItems.find(item => item.id === id) == null){
            return [...currItems, { id, quantity: 1 }];
          }else{
            return currItems.map(item => {
              if (item.id === id) {
                return {...item, quantity: item.quantity+1 };
              }else{
                return item;
              }
            })
          }
        })
      }
      function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
          if(currItems.find(item => item.id === id)?.quantity === 1){
            return currItems.filter(item => item.id !== id);
          }else{
            return currItems.map(item => {
              if(item.id === id){
                return {...item, quantity: item.quantity-1};
              }else{
                return item;
              }
            })
          }
        })
      }

      function removeFromCart(id: number){
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id);
          })
      }
      
    

    return (
        <ShoppingCartContext.Provider
          value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            openCart,
            closeCart,
            cartItems,
            total
          }}
        >
          {children}
          <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
      )
}