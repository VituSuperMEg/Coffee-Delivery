import { Minus, Plus } from "phosphor-react";
import { InputContainer, Wrapper } from "./styles";

interface InputProps {
  quantity: number;
  onIncrease : () => void;
  onDecrease : () => void;
}
export function Input ({onIncrease, onDecrease, quantity}:InputProps) {
  return (
    <InputContainer>
    <Wrapper disabled={quantity < 1} onClick={onDecrease}>
      <Minus size={14} weight="fill" color="#8047F8" />
    </Wrapper>
     <input type="number" readOnly value={quantity} />
     <Wrapper onClick={onIncrease}>
      <Plus size={14} weight="fill" color="#8047F8" />
    </Wrapper>
    </InputContainer>
  )
}