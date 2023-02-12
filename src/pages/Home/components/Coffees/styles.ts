import styled from 'styled-components';


export const CoffeeContainer = styled.section`
 width: 100%;
 margin-top : 2rem;
 h1 {
  font-size : 2rem;
  color : ${props => props.theme.colors['base-subtitle']};
  font-family: 'Baloo 2', cursive;
 }
`;

export const CoffeeContent = styled.section`
   width: 100%;
   display: grid;
   grid-template-columns : repeat(4, 1fr);
   column-gap : 2.5rem;
   row-gap : 2.5rem;
   margin-top : 3.5rem;
`;