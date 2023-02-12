import { CompleteForm } from "./components/CompleteForm";
import { PaymentCoffee } from "./components/CompleteForm/components/PaymentCoffee";
import { CheckOutContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


enum PaymentMethod {
  credit = 'credit',
  debit = 'debit',
  money = "money"
}
const checkoutSchema = zod.object({
  cep : zod.string().min(1, "Informe o CEP"),
  rua : zod.string().min(1, "Informe o nome da rua"),
  numero : zod.string().min(1, "Informe o número da Casa"),
  complemento : zod.string(),
  bairro : zod.string().min(1, "Informe o nome do Bairro"),
  cidade : zod.string().min(1, "Informe o nome da cidade"),
  uf : zod.string().min(2, "Informe UF"),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap : () => {
      return { message : "Informe o método de pagamento"}
    }
  })
});

export type OrderData = zod.infer<typeof checkoutSchema>

type ConfirmData = OrderData;

export function CheckOut() {
  
  const navigate = useNavigate();

  const confirmCheckOut = useForm<ConfirmData>({
    resolver : zodResolver(checkoutSchema),
  })

  const { handleSubmit } = confirmCheckOut;
  
  function handleConfirm (data : ConfirmData) {
   navigate("/success", { 
    state : data
   })
  }
  return (
    <FormProvider {...confirmCheckOut}>
      <CheckOutContainer className="container" onSubmit={handleSubmit(handleConfirm)}>
        <CompleteForm />
        <PaymentCoffee />
      </CheckOutContainer>
    </FormProvider>  
  )
}