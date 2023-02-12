import { SucceessDetails, SuccessContainer } from "./styles";
import imgSuccess from '../../assets/Illustration.png';
import { Info } from "../../components/Info";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate,  } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMehtods } from "../Checkout/components/CompleteForm/components/Payment";
import { useEffect } from 'react';


interface LocationType {
  state : OrderData;
}
export function Succeess () {

  const { colors } = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation() as unknown as LocationType;
  
  useEffect(() => {
     if(!state) {
      navigate('/');
     }
  }, []);

  if(!state) return <></>
  return (
    <SuccessContainer className="container">
     <div>
       <h1>Uhu! Pedido confirmado</h1>
       <p>Agora é só aguardar que logo o café chegará até você</p>
     </div>
     <section>
      <SucceessDetails>
       <Info 
        icon={<MapPin weight="fill" color="#fff"/>}
        background={colors.purple}
        text={
          <p style={{color : colors["base-text"]}}>
            Entrega em <strong>{state.rua}, {state.numero}</strong>
            <br />
            {state.bairro} - {state.cidade}, {state.uf}
          </p>
        }
       />
       <Info 
        icon={<Clock weight="fill" color="#fff"/>}
        background={colors.yellow}
        text={
          <p style={{color : colors["base-text"]}}>
            Previsão de entrega
            <br />
            <strong>20 min - 30 min</strong>
          </p>
        }
       />
       <Info 
        icon={<CurrencyDollar weight="fill" color="#fff"/>}
        background={colors["yellow-dark"]}
        text={
          <p style={{color : colors["base-text"]}}>
           Pagamento na entrega
            <br />
            <strong>{paymentMehtods[state.paymentMethod].label}</strong>
          </p>
        }
       />
      </SucceessDetails>

      <img src={imgSuccess} />
     </section>
    </SuccessContainer >
  )
}