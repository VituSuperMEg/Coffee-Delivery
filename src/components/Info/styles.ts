import styled from "styled-components";

export const InfoContainer = styled.div`
  display : flex;
  align-items : center;
  gap : 0.75rem;
`;

interface IconProps {
  background : string;
}

export const IconContent = styled.div<IconProps>`
  width: 2.5rem;
  height : 2.5rem;
  border-radius : 50%;
  display: flex;
  align-items : center;
  justify-content : center;
  background: ${({background }) => background };
`;
