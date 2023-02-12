import { CoffeeItems, Container, Content } from "./styles";
import coffeImg from '../../../../assets/Imagem.png'
import { Info } from "../../../../components/Info";
import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react';
import { useTheme } from "styled-components";


export function Background () {

  const { colors } = useTheme();
  return (
    <Container>
      <Content className="container">
        <div>
          <section>
            <h1>
             Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </section>

          <CoffeeItems>
            <Info 
            icon={<ShoppingCart size={20} weight="fill" color="#fff"/>}
            background={colors["yellow-dark"]}
            text="Compra simples e segura"
            />
            <Info 
             icon={<Package size={20} weight="fill" color="#fff"/>}
             background={colors["base-text"]}
             text="Embalagem mantém o café intacto"
            />
            <Info  
             icon={<Timer size={20} weight="fill" color="#fff"/>}
             background={colors.yellow}
             text="Entrega rápida e rastreada"
            />
            <Info 
             icon={<Coffee size={20} weight="fill" color="#fff"/>}
             text="O café chega fresquinho até você"
             background={colors.purple}
            />
          </CoffeeItems>
        </div> 
        <img src={coffeImg} />
      </Content>
    </Container>
  )
}