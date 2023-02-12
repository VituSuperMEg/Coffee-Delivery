import { InputStyleContainer, InputWrapper } from "./styles"
import { InputHTMLAttributes, forwardRef } from 'react';


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error? : string;
};

export const InputCheckOut = forwardRef<HTMLInputElement, InputProps>(
  ({error, className, ...rest}, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer  {...rest} ref={ref} />
        {error && (
          <p>{error}</p>
        )}
      </InputWrapper>
    )
  }
)