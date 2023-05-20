import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background-color: ${props => props.theme.baseCard};
  border-radius: 6px 36px;
`

export const CardImage = styled.img`
  display: flex;
  width: 7.5rem;
  margin-top: -2.25rem;
  margin: 0 4.25rem 0.75rem 4.25rem;
`

export const CardCategory = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme.yellowDark};
  background-color: ${(props) => props.theme.yellowLight};
  padding: 0.375rem 0.75rem;
  border-radius: 100px;
  transition: 0.2s;
`
