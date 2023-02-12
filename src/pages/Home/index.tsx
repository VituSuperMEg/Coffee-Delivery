import { Background } from "./components/Background";
import { Coffes } from "./components/Coffees";
import { HomeContainer } from "./styles";

export function Home () {
  return (
    <HomeContainer>
      <Background />
      <Coffes />
    </HomeContainer>
  )
}