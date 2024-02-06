import styled from 'styled-components'

export const BodyComponent = styled.div`
  margin-top: 6.5rem;
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const MainComponent = styled.div`
  display: flex;
  flex-direction: row;
`

export const Title = styled.p`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1.4375rem;
  font-weight: 700;
  font-family: 'Baloo 2', sans-serif;
  line-height: 1.4625rem;
  margin-bottom: 0.94rem;
  height: fit-content;
`

export const LeftBoxComponent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  max-width: 35rem;
  max-height: 18.3rem;
`

export const RequestComponent = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
`

export const RequestTitleComponent = styled.div`
  svg {
    color: ${(props) => props.theme.yellowDark};
  }
  h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4625rem;
  }
`
