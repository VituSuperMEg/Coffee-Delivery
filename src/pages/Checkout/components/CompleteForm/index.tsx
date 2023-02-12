import { InputForm } from "./components/InputForm";
import { Payment } from "./components/Payment";
import { CompleteFormContainer, FormContainer } from "./styles";
import { CurrencyDollar, MapPinLine } from 'phosphor-react';

export function CompleteForm () {
  return (
    <CompleteFormContainer>
       <h1>Complete seu pedido</h1>

       <FormContainer>
         <div>
          <MapPinLine size={22} color="#C47F17"/>
          <header>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </header>
         </div>
         <InputForm />
       </FormContainer>
       <FormContainer>
         <div>
          <CurrencyDollar size={22} color="#8047F8"/>
          <header>
            <p>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </header>
         </div>
         <Payment />
       </FormContainer>
    </CompleteFormContainer>
   
  )
}