import styled from "styled-components";

export const CheckOutContainer = styled.form`
 margin-top : 2.5rem;
 display : flex;
 justify-content : space-between;
 gap : 2rem;
`;

export const CheckOutBase = styled.div`
  width: 100%;
  background : ${props => props.theme.colors["base-card"]};
  border-radius : 6px;
  padding : 2.5rem;
`;