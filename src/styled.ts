import styled from 'styled-components'

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`

export const ButtonsOuter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
