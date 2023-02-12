import styled from "styled-components";
import background from '../../../../assets/Background.png';

export const Container = styled.section`
 width: 100%;
 height: 34rem;
 background: ${() => `url(${background})`};
 display : flex;
 align-items : center;
 justify-content : center;
`;

export const Content = styled.div`
 display : flex;
 margin: auto;
 align-items : center;
 justify-content : center;
 gap : 3.5rem;


section {
  width: 40rem;

  h1 {
   font-size : 3rem;
   font-family: 'Baloo 2', cursive;
  }
  p {
    color : ${props => props.theme.colors["base-subtitle"]};
    font-size : 1.25rem;
  }
}
`;
export const CoffeeItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns : 1fr 1fr;
  row-gap : 1.25rem;
  margin-top : 4rem;
`;