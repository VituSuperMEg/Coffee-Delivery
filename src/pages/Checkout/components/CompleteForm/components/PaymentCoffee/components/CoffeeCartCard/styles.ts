import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  border-bottom : 1px solid ${props => props.theme.colors["base-button"]};
  padding-bottom : 1.5rem;
  margin-bottom : 1.5rem;

 > div {
  display: flex;
  align-items : center;
  gap : 1.5rem;
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  p {
    align-self : flex-start;
    font-weight : 700;
  }
 }
`;

export const AcitonsContainer = styled.div`
  margin-top : 0.5rem;
  height : 2rem;
  display: flex;
  align-items : center;
  gap : 0.5rem;

  > div {
    max-width : 4.5rem;
    height : 100%;
  }

`;

export const RemoveButton = styled.button`
  background : ${props => props.theme.colors["base-button"]};
  border : 0;
  display : flex;
  align-items : center;
  justify-content : center;
  height : 2rem;
  width: 7rem;
  padding : 0.75rem;
  border-radius : 6px;
  cursor : pointer;
  border : 1px solid transparent;
 
  span {
    font-size : bold;
    padding-left : 0.2rem;
    color : ${props => props.theme.colors["base-text"]}
  }
  &:hover {
   border : 1px solid ${props => props.theme.colors.purple};
   transistion : border .2s;
  }
`;