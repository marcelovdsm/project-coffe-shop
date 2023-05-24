import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme.baseCard};
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

export const CardCategoryDiv = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
`

export const CardTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
  text-align: center;
  color: ${(props) => props.theme.baseSubtitle};
  margin: 1rem 1.25rem 0.5rem 1.25rem;
`

export const CardDescription = styled.p`
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1375rem;
  text-align: center;
  color: ${(props) => props.theme.baseLabel};
  margin-bottom: 2.0625rem;
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;
  margin: 0 1.5rem 1.5rem 1.25rem;
  p:first-child {
  }

  p:last-child {
    background-color: ${(props) => props.theme.purpleDark};
    color: #fff;
    padding: 0.5rem;
    border-radius: 6px;
    margin-bottom: 1.25rem;
  }
`

export const Price = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${props => props.theme.baseText};
`

export const PricePrefix = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
`
