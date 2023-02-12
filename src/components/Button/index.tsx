import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export function Button ({...rest}:ButtonProps  ) {
  return (
    <ButtonContainer {...rest} >
      Confirmar Pedido
    </ButtonContainer>
  )
}