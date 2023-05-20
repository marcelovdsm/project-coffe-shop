import { useState } from 'react'
import { Cart } from '../../Pages/Cart'
import { CardCategory, CardImage, CoffeeCardContainer } from './styles'

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
          if (coffeeType) {
            return 
          }
          <h1>{coffee.coffeeName}</h1>
          <p>{coffee.coffeeDescription}</p>
          <footer>
            <p>
              <span>R$</span>9,99
            </p>
            <input
              type="number"
              id="coffeeCount"
              placeholder="1"
              min={1}
              max={9}
              value={coffeeCount}
              onChange={(e) => setCoffeeCount(Number(e.target.value))}
            />
            <p>
              <Cart />
            </p>
          </footer>
        </div>
      ))}
    </CoffeeCardContainer>
  )
}
