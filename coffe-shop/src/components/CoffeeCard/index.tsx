import { useState } from 'react'
import { Cart } from '../../Pages/Cart'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  img: string
  coffeeType: string
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
          <img src={coffee.img} alt="Coffee Image" />
          <span>{coffee.coffeeType}</span>
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
