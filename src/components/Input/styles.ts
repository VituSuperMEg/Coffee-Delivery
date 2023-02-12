import styled from 'styled-components';


export const InputContainer = styled.div`
 flex : 1;
 background : ${props => props.theme.colors['base-button']};
 display : flex;
 algin-items : center;
 justify-content : center;
 gap : 4px;
 border-radius : 6px;

 padding : 0.5rem;

 input {
  text-align : center;
  width : 100%;
  background: none;
  border : none;
  color : ${props => props.theme.colors['base-title']};

  &:focus {
    outline : none;
  }
 }
`;
export const Wrapper = styled.button.attrs({
  type : "button",
})`
 border : 0;
 width : 0.875rem;
 height : 0.875rem;
 background : none;
 cursor : pointer;

 &:disabled {
  opacity : 0.4;
 }

 &:not(:disabled):hover{
  color : ${props => props.theme.colors['purple-dark']}
 }
`;