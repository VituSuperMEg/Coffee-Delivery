import styled from "styled-components";


export const PaymentMethodContainer = styled.div`
  input {
    visibility : hidden;
    appearance : none;
  }
  input:checked + label div {
    background : ${props => props.theme.colors["purple-light"]};
    border-color : ${props => props.theme.colors.purple};
  }
`;
export const Content = styled.div`
  padding : 0 1rem;
 background : ${props => props.theme.colors["base-button"]};
 color : ${props => props.theme.colors["base-text"]};
 cursor : pointer;
 display : flex;
 align-items : center;
 justify-content : flex-start;
 gap : 0.75rem;
 font-size : 0.75rem;
 text-transform : uppercase;
 border-radius : 6px;
 height : 3rem;
 border-radius : 1px solid transparent;
 svg {
  color : #8047F8;
 }
 &:hover {
  background : ${props => props.theme.colors["base-hover"]};
 }
 user-select : none;
`;