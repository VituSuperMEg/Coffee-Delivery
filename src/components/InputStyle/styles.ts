import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction : column;
  gap : 0.3rem;
  position : relative;

  > p {
    color : #f44336;
  }
`;


export const InputStyleContainer = styled.input`
  hegiht : 2.625rem;
  border-radius : 4px;
  border : 1px solid ${props => props.theme.colors['base-button']};
  background : ${props => props.theme.colors['base-input']};

  &:focus-within {
    border-color : ${props => props.theme.colors};
  }
  color : ${props => props.theme.colors['base-text']};
  font-size : 0.75rem;
  padding : 0 0.75rem;

  &::placeholder {
    color : ${props => props.theme.colors['base-label']};
  }
 
`;