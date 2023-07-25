import {
  CardCategory,
  CardCategoryDiv,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
  CoffeeCardContainer,
  Price,
  PricePrefix,
} from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { CardCoffeeNumber } from '../CardCoffeeNumber'
import { createContext } from 'react'

interface CoffeeCardProps {
  img: string
  coffeeType: string[]
  coffeeName: string
  coffeeDescription: string
}

interface CoffeeProps {
  coffee: CoffeeCardProps
  index: number
}

interface coffeeContextType {
  coffee: CoffeeCardProps
}

export const coffeeContext = createContext({} as coffeeContextType)

export const CoffeeCard = ({ coffee, index }: CoffeeProps) => {
  return (
    <CoffeeCardContainer>
      <div key={index}>
        <CardImage src={coffee.img} alt="Coffee Image" />
        <CardCategoryDiv>
          {coffee.coffeeType.map((item, index) => {
            return <CardCategory key={index}>{item}</CardCategory>
          })}
        </CardCategoryDiv>
        <CardTitle>{coffee.coffeeName}</CardTitle>
        <CardDescription>
          <div>{coffee.coffeeDescription}</div>
        </CardDescription>
        <CardFooter>
          <Price>
            <PricePrefix>R$</PricePrefix>9,99
          </Price>
          <CardCoffeeNumber />
          <p>
            <ShoppingCartSimple size={22} weight="fill" />
          </p>
        </CardFooter>
      </div>
    </CoffeeCardContainer>
  )
}
