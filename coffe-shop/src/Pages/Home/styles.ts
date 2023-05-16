import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  gap: 1rem;
  padding: 13rem 6.5rem 6.5rem 6.5rem;
  width: 36.75rem;
  height: 12rem;

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

  p{
    font-size: 1.25rem;
  }
`

export const IntroImage = styled.img`
position: absolute;
width: 29.75rem;
height: 22.5rem;
left: calc(50% - 29.75rem/2 + 20.125rem);
top: calc(50% - 22.5rem/2);
`