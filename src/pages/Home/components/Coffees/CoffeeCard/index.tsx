import { Input } from "../../../../../components/Input";
import { useCart } from "../../../../../hooks/useCart";
import { CoffeeCardContainer, CoffeeCartWrapper, CoffeeDescription, CoffeeFooter, CoffeeName } from "./styles";
import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

export interface Coffee {
  id : number;
  name : string;
  description : string;
  photo : string;
  price : number;
}
interface CoffeeProps {
  coffee : Coffee;
}

export function CoffeeCard({ coffee }:CoffeeProps){
  
  const [ quantity, setQuantity ] = useState(0);

  function handleIncrease() {
    setQuantity( state => state + 1);
  }
  function handleDecrease() {
    setQuantity( state => state - 1);
  }
  const { addCoffeeCart } = useCart();
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeCart(coffeeToAdd)
  }
  return (
    <CoffeeCardContainer>
      <img src={`/coffee/${coffee.photo}`}/>
      <CoffeeName>
        {coffee.name}
      </CoffeeName>
      <CoffeeDescription>
      {coffee.description}
      </CoffeeDescription>

      <CoffeeFooter>
        <div>
          <span>R$ <strong>9,99</strong></span>
        </div>
        <CoffeeCartWrapper>
        <Input 
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <button onClick={handleAddToCart}>
          <ShoppingCart size={20} weight="fill"/>
        </button>
      </CoffeeCartWrapper>
      </CoffeeFooter>
    </CoffeeCardContainer>
  )
}