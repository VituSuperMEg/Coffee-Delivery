import { Content, PaymentMethodContainer } from "./styles";
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon : ReactNode;
  label : string;
}

export const PaymentMethod = forwardRef<HTMLInputElement, Props>(
  ({id, label, icon, ...rest }, ref) => {
    return(
    <PaymentMethodContainer>
          <input id={id} type="radio" {...rest} name="paymentMethod" ref={ref}/>
          <label htmlFor={id}>
            <Content>
              {icon}
              {label}
            </Content>
          </label>
    </PaymentMethodContainer>
    )
});