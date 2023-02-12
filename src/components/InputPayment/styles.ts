import styled from 'styled-components';


export const InputPaymentContainer = styled.input`
   display: flex;
   align-items: center;
   justify-content: center; 
   gap : 0.5rem;
   text-transform: uppercase;
   color : ${props => props.theme.colors['base-text']};
   width: 12rem;
   height : 2.5rem;
   background : ${props => props.theme.colors['base-button']};
   border-radius : 6px;
   padding : 0 0.75rem;
   border : 1px solid transparent;
   cursor : pointer;
   user-select : none;
   &:focus {
    border : 1px solid ${props => props.theme.colors['purple-dark']};
   }
   &:hover {
    background: ${props => props.theme.colors['base-hover']}
   }
`;