import { useState } from 'react'
import { CardNumber } from './styles'
import { Plus, Minus } from 'phosphor-react'

export const CardCoffeeNumber = () => {
  const [count, setCount] = useState(1)

  return (
    <CardNumber>
      <Minus
        size={16}
        weight="bold"
        onClick={() => setCount(count - 1)}
      ></Minus>
      <span>{count}</span>
      <Plus size={16} weight="bold" onClick={() => setCount(count + 1)}></Plus>
    </CardNumber>
  )
}
