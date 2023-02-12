import { HeaderActions, HeaderContainer, LocateButton, ShoppingButton } from "./styles";
import logoImg from '../../assets/LogoCoffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  
  const { cartQuantity } = useCart();

  return (
    <>
     <HeaderContainer>
      <div>
        <NavLink to="/">
             <img src={logoImg} />
        </NavLink>
  
      <HeaderActions>
        <LocateButton>
          <MapPin size={22} weight="fill" color="#8047f8"/>
          Cedro, Ce
        </LocateButton>
        <NavLink to="/check-out">
          <ShoppingButton>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
           <ShoppingCart size={22} weight="fill" color="#c47f17"/>
          </ShoppingButton>
        </NavLink>
      
      </HeaderActions>
      </div>
     </HeaderContainer>
    </>
  )
}