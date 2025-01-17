import styled from 'styled-components'

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.background};
`
