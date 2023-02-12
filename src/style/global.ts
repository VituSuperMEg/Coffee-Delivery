import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
  margin : 0;
  padding : 0;
  font-family : 'Roboto', sans-serif;
  box-sizing : border-box;
 }
 body {
  background : ${props => props.theme.colors.background};
  overflow-x : hidden;
 }
 body::-webkit-scrollbar {
  width: 5px;             
}

body::-webkit-scrollbar-track {
  background: #d7d7d7;      
}
body::-webkit-scrollbar-thumb {
  background-color: #c47f17;  
  border-radius: 20px; 
  
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"]{
  -moz-appearance: textfield;
}
`;