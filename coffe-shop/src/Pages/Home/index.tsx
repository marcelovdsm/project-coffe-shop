import {
  Intro,
  Title,
  IntroImage,
  InfoComponent,
  CartIconComponent,
  TimerIconComponent,
  PackageIconComponent,
  CoffeeIconComponent,
  CoffeeList,
  BodyComponent,
  Filter,
  CoffeeListHeader,
} from './styles'
import expresso from '../../assets/expresso.jpg'
import CoffeIntroImage from '../../assets/coffe-intro.jpg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'

export const Home = () => {
  return (
    <BodyComponent>
      <Intro>
        <Title>
          <span>
            <h1>Encontre o café perfeito</h1> <h1>para qualquer hora do dia</h1>
          </span>
          <h2>
            Com o Coffee Delivery você recebe o seu café onde estiver, a
            qualquer hora
          </h2>
          <InfoComponent>
            <div>
              <p>
                <CartIconComponent>
                  <ShoppingCart size={16} color="#fff" weight="fill" />
                </CartIconComponent>
                Compra simples e segura
              </p>
              <p>
                <TimerIconComponent>
                  <Timer size={16} color="#fff" weight="fill" />
                </TimerIconComponent>
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <PackageIconComponent>
                  <Package size={16} color="#fff" weight="fill" />
                </PackageIconComponent>
                Embalagem mantém o café intacto
              </p>
              <p>
                <CoffeeIconComponent>
                  <Coffee size={16} color="#fff" weight="fill" />
                </CoffeeIconComponent>
                O café chega fresquinho até você
              </p>
            </div>
          </InfoComponent>
        </Title>
        <IntroImage src={CoffeIntroImage} />
      </Intro>

      <CoffeeListHeader>
        <h2>Nossos cafés</h2>
        <Filter>
          <span>TRADICIONAL</span>
          <span>ESPECIAL</span>
          <span>COM LEITE</span>
          <span>ALCOÓLICO</span>
          <span>GELADO</span>
        </Filter>
      </CoffeeListHeader>

      <CoffeeList>
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      <CoffeeCard
        coffeeCardInfo={[
          {
            img: expresso,
            coffeeType: 'TRADICIONAL',
            coffeeName: 'Expresso Tradicional',
            coffeeDescription:
              'O tradicional café feito com água quente e grãos moídos',
          },
        ]}
      />
      </CoffeeList>
    </BodyComponent>
  )
}
