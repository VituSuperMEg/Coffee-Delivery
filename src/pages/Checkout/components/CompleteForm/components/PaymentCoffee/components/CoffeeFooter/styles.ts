import styled from 'styled-components';


export const CoffeeFooterContainer = styled.footer`
 display : flex;
 flex-direction : column;
 gap : 0.8rem;

 > div {
  display : flex;
  align-items : center;
  justify-content : space-between;

  span {
    color : ${props => props.theme.colors['base-text']};
  }
  .total {
    color : ${props => props.theme.colors['base-subtitle']};
    font-size : 1.25rem;
    font-weight : bold;
  }
 }

`;