import { useFormContext } from "react-hook-form";
import { InputContainer} from "../../styles";
import { InputCheckOut } from "../../../../../../components/InputStyle";


interface ErrosType {
  errors :  {
    [key : string] : {
      message : string;
    }
  }
}
export function InputForm() {
  const { register, formState} = useFormContext();
  
  const { errors } = formState as unknown as ErrosType; 
  return (
     <InputContainer>
       <InputCheckOut 
        placeholder="CEP" 
        type="number" 
        className="cep" 
        {...register('cep')}
        error={errors.cep?.message}
       />
       <InputCheckOut 
         placeholder="Rua" 
         className="rua"
         {...register('rua')}
         error={errors.rua?.message}
       />
       <InputCheckOut 
       placeholder="Número" 
       type="number"
       {...register('numero')}
       error={errors.numero?.message}
       />
       <InputCheckOut 
       placeholder="Complemento" 
       className="complemento"
       {...register('complemento')}
       error={errors.complemento?.message}
       />
       <InputCheckOut 
       placeholder="Bairro"
       {...register('bairro')}
       error={errors.bairro?.message}
       />
       <InputCheckOut 
       placeholder="Cidade" 
       {...register('cidade')}
       error={errors.cidade?.message}
       />
       <InputCheckOut
        placeholder="UF"
        {...register('uf')}
        error={errors.uf?.message}
       />
     </InputContainer> 
  )
}

