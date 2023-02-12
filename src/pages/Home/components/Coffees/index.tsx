import { coffees } from "../../../../utils/coffes";
import { CoffeeCard } from "./CoffeeCard";
import { CoffeeContainer, CoffeeContent } from "./styles";

export function Coffes () {
  return (
    <CoffeeContainer className="container">
      <div>
         <h1>Nossos Cafés</h1>
      </div>
      <CoffeeContent>
        {coffees.map(coffee => {
          return (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
            />
          )
        })}
     
      </CoffeeContent>
    </CoffeeContainer>
  )
}