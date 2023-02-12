import styled from 'styled-components';
import { CheckOutBase } from '../../styles';


export const CompleteFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap : 0.75rem;
  width : 40rem;
`;

export const FormContainer = styled(CheckOutBase)`
  display: flex;
  flex-direction: column;
  gap : 2rem;

  div {
    display: flex;
    gap : 0.5rem;
    header {
      
      p {
        color : ${props => props.theme.colors['base-subtitle']};
        font-size : 1rem;
        font-weight : bold;
      }
      span {
        font-size : 0.875rem;
        color : ${props => props.theme.colors['base-text']};
      }
    }
  }
`;
export const InputContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns : 12.5rem 17.5rem 3.75rem;
  column-gap : 0.75rem;
  row-gap : 1rem;
  grid-auto-flow : dense;

  input {
    height : 2.625rem;
    border-radius : 4px;
    border-radius : 4px;
    border : 1px solid ${props => props.theme.colors['base-button']};
    background: ${props => props.theme.colors['base-input']};
    outline : none;
    padding: 0.5rem;
    color : ${props => props.theme.colors['base-text']};

    &:focus {
      border-color ${props => props.theme.colors['yellow-dark']};
    }
  }
  .cep {
    grid-column : span 3;
    max-width : 12.5rem;
  }
  .rua {
    grid-column : span 3;
  }
  .complemento {
    grid-column : span 2;
  }
`;
export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns : repeat(3, 1fr);
  gap : 0.75rem;
`;
