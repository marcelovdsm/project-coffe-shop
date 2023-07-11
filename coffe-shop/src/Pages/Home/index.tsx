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
import CoffeIntroImage from '../../assets/coffe-intro.jpg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'

export const Home = () => {
  const coffeeList = [
    {
      img: './../assets/expresso.png',
      coffeeType: ['TRADICIONAL', 'QUENTE'],
      coffeeName: 'Expresso Tradicional',
      coffeeDescription:
        'O tradicional café feito com água quente e grãos moídos',
    },
    {
      img: '../../assets/americano.png',
      coffeeType: ['TRADICIONAL', 'QUENTE'],
      coffeeName: 'Expresso Americano',
      coffeeDescription: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      img: '../../assets/expresso-cremoso.png',
      coffeeType: ['TRADICIONAL', 'QUENTE'],
      coffeeName: 'Expresso Cremoso',
      coffeeDescription: 'Café expresso tradicional com espuma cremosa',
    },
    {
      img: '../../assets/cafe-gelado.png',
      coffeeType: ['TRADICIONAL', 'GELADO'],
      coffeeName: 'Expresso Gelado',
      coffeeDescription: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      img: '../../assets/cafe-com-leite.png',
      coffeeType: ['TRADICIONAL', 'COM LEITE', 'QUENTE'],
      coffeeName: 'Café com leite',
      coffeeDescription:
        'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      img: '../../assets/latte.png',
      coffeeType: ['TRADICIONAL', 'COM LEITE', 'QUENTE'],
      coffeeName: 'Latte',
      coffeeDescription:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      img: '../../assets/capuccino.png',
      coffeeType: ['TRADICIONAL', 'COM LEITE', 'QUENTE'],
      coffeeName: 'Capuccino',
      coffeeDescription:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      img: '../../assets/macchiato.png',
      coffeeType: ['TRADICIONAL', 'COM LEITE', 'QUENTE'],
      coffeeName: 'Macchiato',
      coffeeDescription:
        'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      img: '../../assets/mochaccino.png',
      coffeeType: ['TRADICIONAL', 'COM LEITE', 'QUENTE'],
      coffeeName: 'Mocaccino',
      coffeeDescription:
        'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      img: '../../assets/chocolate-quente.png',
      coffeeType: ['ESPECIAL', 'COM LEITE', 'QUENTE'],
      coffeeName: 'Chocolate Quente',
      coffeeDescription:
        'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      img: '../../assets/cubano.png',
      coffeeType: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      coffeeName: 'Expresso Tradicional',
      coffeeDescription:
        'O tradicional café feito com água quente e grãos moídos',
    },
    {
      img: '../../assets/havaiano.png',
      coffeeType: ['ESPECIAL', 'QUENTE'],
      coffeeName: 'Expresso Tradicional',
      coffeeDescription: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      img: '../../assets/arabe.png',
      coffeeType: ['ESPECIAL', 'QUENTE'],
      coffeeName: 'Árabe',
      coffeeDescription:
        'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      img: '../../assets/irlandes.png',
      coffeeType: ['ESPECIAL', 'ALCOÓLICO', 'QUENTE'],
      coffeeName: 'Irlandês',
      coffeeDescription:
        'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ]

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
        {coffeeList.map((coffeeCard, index) => {
          return (
            <CoffeeCard
              key={index}
              img={coffeeCard.img}
              coffeeType={coffeeCard.coffeeType}
              coffeeName={coffeeCard.coffeeName}
              coffeeDescription={coffeeCard.coffeeDescription}
            />
          )
        })}
      </CoffeeList>
    </BodyComponent>
  )
}
