import { Trash } from "phosphor-react";
import { Input } from "../../../../../../../../components/Input";
import { AcitonsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from '../../../../../../../../contexts/CartContext';
import { format } from "../../../../../../../../utils/format";
import { useCart } from "../../../../../../../../hooks/useCart";


interface CoffeeCartProps {
 coffee : CartItem
}
export function CoffeeCartCard ({ coffee }: CoffeeCartProps) {
  
  const { CartsCartQuantity, removeCart } = useCart();

  function handleIncrease () {
    CartsCartQuantity(coffee.id, "increase")
  }
  function handleDecrease () {
    CartsCartQuantity(coffee.id, "decrease")
  }
  function handleRemove () {
    removeCart(coffee.id)
  }
  const coffeeTotal = coffee.price * coffee.quantity;
  const price = format(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffee/${coffee.photo}`}/>
        
        <div>
          <p>{coffee.name}</p>
          <AcitonsContainer>
            <Input onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity} />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} color="#8047F8"/>
              <span>REMOVER</span>
            </RemoveButton>
          </AcitonsContainer>
        </div>
      </div>
      <p>R$ {price}</p>
    </CoffeeCartCardContainer>
  )
}