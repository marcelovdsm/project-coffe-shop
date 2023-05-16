import { Intro, Title, IntroImage } from "./styles"
import CoffeIntroImage from '../../assets/coffe-intro.jpg'

export const Home = () => {
  return(
    <Intro>
      <Title>
        <span><h1>Encontre o café perfeito</h1> <h1>para qualquer hora do dia</h1></span>
        <p>Com o Coffee Delivery você recebe o seu café onde estiver, a qualquer hora</p>
      </Title>
      <IntroImage src={CoffeIntroImage} />
    </Intro>
  )
}