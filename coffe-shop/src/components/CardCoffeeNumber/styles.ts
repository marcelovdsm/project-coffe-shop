import styled from 'styled-components'

export const CardNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  margin-bottom: 1.25rem;

  > :first-child {
    color: ${(props) => props.theme.purple};
  }

  > :last-child {
    color: ${(props) => props.theme.purple};
  }
`
