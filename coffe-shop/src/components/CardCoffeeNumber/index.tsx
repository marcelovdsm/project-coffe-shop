import { useState } from 'react'

export const CardCoffeeNumber = () => {
const [count, setCount] = useState(1)

  return(
    <div>
      <span onClick={() => setCount(count - 1)}>-</span>
      <span>{count}</span>
      <span onClick={() => setCount(count + 1)}>+</span>
    </div>
  )
}