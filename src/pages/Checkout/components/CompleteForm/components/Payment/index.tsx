import { Bank, CreditCard, Money } from 'phosphor-react';
import { PaymentContainer } from '../../styles';
import { PaymentMethod } from './components/PaymentMethod';
import { useFormContext } from 'react-hook-form';


export const paymentMehtods = {
  credit : {
    label : "Cartão de crédito",
    icon : <CreditCard size={16}/>
  },
  debit : {
    label : "Cartão de Débito",
    icon : <Bank size={16}/>
  },
  money : {
    label : "dinheiro",
    icon : <Money size={16}/>
  }
}
export function Payment () {

  const { register, formState : { errors }} = useFormContext();

  const PaymentError = errors?.PaymentMethod?.message as unknown as string;

  return (
    <PaymentContainer>
      {Object.entries(paymentMehtods).map(([key, { label, icon }]) => (
        <PaymentMethod 
         key={label}
         id={key}
         icon={icon}
         label={label}
         value={key}
         {...register('paymentMethod')}
        />
      ))}
      {PaymentError && <p style={{ color : '#f44336'}}>{PaymentError}</p>}
    </PaymentContainer>
  )
}