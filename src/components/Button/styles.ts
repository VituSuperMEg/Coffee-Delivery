import styled from 'styled-components';


export const ButtonContainer = styled.button`
 width : 100%;
 height : 2.875rem;
 background : ${props => props.theme.colors.yellow};
 color : #fff;
 font-weight : bold;
 border : 0;
 margin-top : 1rem;
 border-radius : 6px;
 cursor : pointer;
 text-transform : uppercase;
 
 &:not(:disabled):hover {
  background: ${props => props.theme.colors['yellow-dark']};
  transition : background-color .2s;
 }
 &:disabled{
  opacity : 0.7;
  cursor: not-allowed;
 }
`;