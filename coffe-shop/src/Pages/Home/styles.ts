import styled from "styled-components";

export const BodyComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34.5rem;
`

export const Intro = styled.div`
  display: flex;
  gap: 1rem;
  padding: 13rem 6.5rem 6.5rem 6.5rem;

`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: calc(50% - 36.75rem/2 - 16.625rem);
  top: calc(50% - 12rem/2 - 5.125rem);
  max-width: 36rem;

  h1{
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 3.9rem;
  }

  h2{
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['baseSubtitle']};
  }
`

export const IntroImage = styled.img`
position: absolute;
width: 29.75rem;
height: 22.5rem;
left: calc(50% - 29.75rem/2 + 20.125rem);
top: calc(50% - 22.5rem/2);
`

export const InfoComponent = styled.div`
  display: flex;
  width: 35.43rem;
  gap: 2.5rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    font-size: .5rem;
    color: ${props => props.theme['baseText']};
  }

  p{
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p i{
    display: inline-flex;
    max-width: 2rem;
    padding: 0.5rem;
    border-radius: 999px;
  }
`

export const CartIconComponent = styled.i`
  background-color: ${props => props.theme['yellowDark']};
`

export const TimerIconComponent = styled.i`
  background-color: ${props => props.theme['yellow']};
`

export const PackageIconComponent = styled.i`
  background-color: ${props => props.theme['baseText']};
`

export const CoffeeIconComponent = styled.i`
  background-color: ${props => props.theme['purple']};
`

export const CoffeeList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem 10rem 10rem;

  h2{
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme['baseSubtitle']};
  }
`
export const Filter = styled.p`
  display: flex;
  gap: 1.25rem;
  span{
    font-size: 0.625rem;
    font-weight: 700;
    color: ${props => props.theme['yellowDark']};
    border: 1px solid ${props => props.theme['yellowDark']};
    padding: 0.375rem 0.75rem;
    border-radius: 100px;
    transition: 0.2s;
  }

  span:hover{
    background-color: ${props => props.theme['yellowDark']};
    color: ${props => props.theme['white']};
  }
`