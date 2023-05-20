import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background-color: ${props => props.theme['baseCard']};
  border-radius: 6px 36px;
`
