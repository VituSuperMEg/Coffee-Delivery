import { useCart } from "../../../../../../hooks/useCart";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { CoffeeFooter } from "./components/CoffeeFooter";
import { PaymentCoffeeContainer, PaymentDetails } from "./styles";

export function PaymentCoffee () {
  
  const { carts } = useCart();
  return (
   <PaymentCoffeeContainer>
    <h2>Cafés selecionados</h2>

    <PaymentDetails>

      {carts.map((cart) => (
        <CoffeeCartCard key={cart.id} coffee={cart}/>
      ))}
      <CoffeeFooter />
    </PaymentDetails>
   </PaymentCoffeeContainer>
  )
}