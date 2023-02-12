import styled from 'styled-components';

export const HeaderContainer = styled.header`
 background : ${props => props.theme.colors.background};
 width : 100%;
 height : 7rem;
 display : flex;
 align-items : center;
 position: sticky;   
 top: 0; 
 box-shadow: 1px 2px 13px -1px rgba(0,0,0,0.2);
 -webkit-box-shadow: 1px 2px 13px -1px rgba(0,0,0,0.2);
 -moz-box-shadow: 1px 2px 13px -1px rgba(0,0,0,0.2);
 
 > div {
  display : flex;
  padding : 2rem;
  width : 80%;
  margin : 0 auto;
  aling-items : center;
  justify-content : space-between;
 }
 
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items : center;
  gap : 0.75rem;
`;
export const LocateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap : 4px;
  width: 10rem;
  height: 3rem;
  border-radius : 6px;
  border : none;
  padding : 0 0.5rem;

  font-size : 1rem;
  color : ${props => props.theme.colors['purple-dark']};
`;
export const ShoppingButton = styled.button`
 background: ${props => props.theme.colors['yellow-light']};
 height: 2.3rem;
 min-width: 2.3rem;
 border : 0;
 border-radius : 6px;
 display: flex;
 cursor : pointer;
 position: relative;
 align-items: center;
 justify-content: center;

 span {
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius : 50%;
  top : calc(-1.25rem / 2);
  right : calc(-1.25rem / 2);
  background: ${props => props.theme.colors['yellow-dark']};
  color : #fff;
  font-weight : bold;
  display: flex;
  align-items : center;
  justify-content : center;
 }

`;