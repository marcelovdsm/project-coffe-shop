import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 6.5rem;
  background-color: ${(props) => props.theme.white};

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 10rem 2rem 10rem;
    font-size: 1.125rem;
    aside {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      align-items: center;
      p:first-child {
        display: flex;
        gap: 0.25rem;
        padding: 0.5rem;
        background-color: ${(props) => props.theme.purpleLight};
        border-radius: 6px;
        color: ${(props) => props.theme.purpleDark};
      }
      p:last-child a {
        display: flex;
        background-color: ${(props) => props.theme.yellowLight};
        color: ${(props) => props.theme.yellowDark};
        padding: 0.5rem;
        border-radius: 6px;
      }

      p:last-child:hover {
        cursor: pointer;
      }
    }
  }
`
