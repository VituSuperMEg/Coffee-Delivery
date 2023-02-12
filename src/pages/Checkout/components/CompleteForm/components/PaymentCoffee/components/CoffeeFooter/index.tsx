import { Button } from "../../../../../../../../components/Button";
import { useCart } from "../../../../../../../../hooks/useCart";
import { format } from "../../../../../../../../utils/format";
import { CoffeeFooterContainer } from "./styles";

const entregaPrice = 3.5
export function CoffeeFooter () {
  
  const { cartTotal, cartQuantity } = useCart();
  const total = entregaPrice + cartTotal;

  const totalItems = format(cartTotal)
  const entregaPriceFormat = format(entregaPrice)
  const totalPriceFormated = format(total)
  
  return (
    <CoffeeFooterContainer>
      <div>
        <span>Total de itens</span>
        <p>R$ {totalItems}</p>
      </div>
      <div>
        <span>Entrega</span>
        <p>R$ {entregaPriceFormat}</p>
      </div>
      <div>
        <span className="total">Total</span>
        <p className="total">R$ {totalPriceFormated}</p>
      </div>
      <Button disabled={cartQuantity <= 0} type="submit"/>
    </CoffeeFooterContainer>
  )
}