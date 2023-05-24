import { useState } from 'react'
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

interface CoffeeCardProps {
  img: string
  coffeeType: Array<String>
  coffeeName: string
  coffeeDescription: string
}

interface Props {
  coffeeCardInfo: CoffeeCardProps[]
}

export const CoffeeCard = ({ coffeeCardInfo }: Props) => {
  const [coffeeCount, setCoffeeCount] = useState(1)

  return (
    <CoffeeCardContainer>
      {coffeeCardInfo.map((coffee, index) => (
        <div key={index}>
          <CardImage src={coffee.img} alt="Coffee Image" />
          <CardCategoryDiv>
            {coffee.coffeeType.map((item, index) => {
              return <CardCategory key={index}>{item}</CardCategory>
            })}
          </CardCategoryDiv>
          <CardTitle>{coffee.coffeeName}</CardTitle>
          <CardDescription>{coffee.coffeeDescription}</CardDescription>
          <CardFooter>
            <Price>
              <PricePrefix>R$</PricePrefix>9,99
            </Price>
            <CardCoffeeNumber/>
            <p>
              <ShoppingCartSimple size={22} weight="fill" />
            </p>
          </CardFooter>
        </div>
      ))}
    </CoffeeCardContainer>
  )
}
