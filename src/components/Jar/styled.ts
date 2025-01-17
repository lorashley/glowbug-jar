import styled from 'styled-components'
import GlowbugBase from '../Glowbug'

export const JAR_WIDTH = 400
export const JAR_HEIGHT = 600

export const Outer = styled.div`
  position: relative;
  width: ${JAR_WIDTH}px;
  height: ${JAR_HEIGHT}px;
  border-radius: 20%; // Makes it look like a jar
  overflow: hidden; // Ensures fireflies don't escape
`

export const GlassJar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.5;
  z-index: 0;
`

export const Glowbug = styled(GlowbugBase)`
  position: absolute; // Removed from layout flow
  z-index: 10;
  animation: floating 5s infinite ease-in-out;

  @keyframes floating {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(30px, -20px);
    }
    50% {
      transform: translate(-20px, 30px);
    }
    75% {
      transform: translate(20px, -30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`
