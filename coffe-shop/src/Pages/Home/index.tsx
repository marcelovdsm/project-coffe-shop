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
import expresso from '../../assets/expresso.png'
import americano from '../../assets/americano.png'
import expressoCremoso from '../../assets/expresso-cremoso.png'
import expressoGelado from '../../assets/cafe-gelado.png'
import cafeComLeite from '../../assets/cafe-com-leite.png'
import latte from '../../assets/latte.png'
import capuccino from '../../assets/capuccino.png'
import macchiato from '../../assets/macchiato.png'
import mocaccino from '../../assets/mochaccino.png'
import chocolateQuente from '../../assets/chocolate-quente.png'
import cubano from '../../assets/cubano.png'
import havaiano from '../../assets/havaiano.png'
import arabe from '../../assets/arabe.png'
import irlandes from '../../assets/irlandes.png'
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
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: americano,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Americano',
              coffeeDescription:
                'Expresso diluído, menos intenso que o tradicional',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: expressoCremoso,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: expressoGelado,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: cafeComLeite,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: latte,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: capuccino,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: macchiato,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: mocaccino,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: chocolateQuente,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: cubano,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: havaiano,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: arabe,
              coffeeType: ['TRADICIONAL'],
              coffeeName: 'Expresso Tradicional',
              coffeeDescription:
                'O tradicional café feito com água quente e grãos moídos',
            },
          ]}
        />
        <CoffeeCard
          coffeeCardInfo={[
            {
              img: irlandes,
              coffeeType: ['TRADICIONAL'],
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
