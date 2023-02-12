import { ReactNode, createContext, useEffect, useState } from "react";
import { produce } from 'immer';
import { Coffee } from "../pages/Home/components/Coffees/CoffeeCard";
import { ChartPieSlice } from "phosphor-react";

export interface CartItem extends Coffee {
  quantity: number;
  id : number;
  name : string;
  price : number;
}

interface CartType {
  carts : CartItem[];
  addCoffeeCart : (coffee: CartItem) => void;
  CartsCartQuantity: (cartID : number, type  : "increase" | "decrease") => void;
  removeCart : (cartId : number) => void;
  cartTotal : number;
  cartQuantity : number;
}
interface CartProps {
  children : ReactNode;
}

export const CartContext = createContext( {} as CartType);

export function CartProvider ( { children }: CartProps){

  const [carts, setCarts] = useState<CartItem[]>([]);
  
  const cartQuantity = carts.length;

  const cartTotal = carts.reduce((total, cart) => {
      return total + cart.price * cart.quantity;
  }, 0);

  function addCoffeeCart(coffee : CartItem) {
   const coffeeExists = carts.findIndex(cart => cart.id === coffee.id);

   const newCart = produce(carts, (draft) => {
    if(coffeeExists < 0 ){
      draft.push(coffee)
    }else{
      draft[coffeeExists].quantity += coffee.quantity;
    }
   })
   setCarts(newCart);
  }

  function CartsCartQuantity(cartId : number, type : 'increase' | 'decrease') {
    const newCart = produce( carts, (draft) => {
      const coffeeExists  = carts.findIndex(
      (carts) => carts.id === cartId
    );
    if ( coffeeExists >= 0 ){
      const item = draft[coffeeExists];
      draft[coffeeExists].quantity =
      type === 'increase' ? item.quantity + 1 : item.quantity - 1;
    }
    })
    setCarts(newCart);
    };
    function removeCart ( cartId : number){
      const newCart = produce(carts, (draft) => {
        const coffeeExists  = carts.findIndex(
          (carts) => carts.id === cartId
        );

        if(coffeeExists >= 0){
          draft.splice(coffeeExists, 1)
        }
      })
      setCarts(newCart);
    }

  return (
    <CartContext.Provider value={{ carts, addCoffeeCart, cartQuantity, CartsCartQuantity, removeCart, cartTotal}}>
       {children}
    </CartContext.Provider>
  )
}