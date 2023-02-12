import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background : ${props => props.theme.colors['base-card']};
  border-radius : 6px 36px 6px 36px;
  padding : 1.25rem;
  display: flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  padding-top : 0;
  text-align : center;

  img {
    width: 7.5rem;
    height : 7.5rem;
    margin-top : -1.25rem;
  }
`;
export const CoffeeName = styled.h2`
 font-size : 1.25rem;
 color : ${props => props.theme.colors['base-subtitle']};
 font-family : 'Baloo 2', cursive;
`;
export const CoffeeDescription = styled.p`
 color : ${props => props.theme.colors['base-label']};
 font-size : 0.875rem;
 line-height : 1.6;
 margin-bottom : 2rem;

`;

export const CoffeeFooter = styled.footer`
 width: 100%;
 display: flex;
 align-items : center;
 justify-content : center;
 

 > div {
  display: flex;
  align-items : center;
  gap : 3px;
  
  span {
    font-family : 'Baloo 2', cursive;
    margin-right : 2rem;
    display: flex;
    align-items : center;
    justify-content : space-between;
  }
  strong {
    font-family : 'Baloo 2', cursive;
    color : ${props => props.theme.colors['base-text']};
    font-size : 1.7rem;
  }
 }
`;
export const CoffeeCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;
  
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border : none;
    display: flex;
    align-items : center;
    justify-content : center;
    background: ${props => props.theme.colors['purple-dark']};
    color : ${props => props.theme.colors["base-card"]};
    border-radius : 6px;
    margin-left : 0.3rem;
    cursor : pointer;
    &:hover {
      background: ${props => props.theme.colors['purple']};
      transistion : .2s;
    }
  }
`;