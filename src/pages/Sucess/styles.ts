import styled from 'styled-components';


export const SuccessContainer = styled.div`
  display : flex;
  flex-direction : column;
  gap : 2.5rem;
  margin-top : 5rem;
  > div {
    h1 {
      font-family : 'Baloo 2', cursive;
      color : ${props => props.theme.colors['yellow-dark']};
      font-weight : bold;
      font-size : 2rem;
    }
    p {
      color : ${props => props.theme.colors['base-subtitle']};
      font-size : 1.25rem;
    }
  }

  > section {
    display: flex;
    align-items : center;
    justify-content : space-between;
  }
`;
export const SucceessDetails = styled.div`

 padding : 2.5rem;
 border-radius : 6px 36px 6px 36px;
 background : ${props => props.theme.colors.background};
 min-width : 32rem;
 display: flex;
 flex-direction : column;
 gap : 2rem;
 position: relative;

 &::before {
  content : '';
  position : absolute;
  inset : -1px;
  z-index : -1;
  border-radius : 7px 37px 7px 37px;
  background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
 }
`;