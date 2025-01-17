import styled from 'styled-components'
import { GlowbugKind } from './types'
import { baseColors } from '@/system/colors'

const getColor = (kind?: GlowbugKind) => {
  switch (kind) {
    case GlowbugKind.PEE:
      return baseColors.yellow
    case GlowbugKind.LOVE:
      return baseColors.red
    case GlowbugKind.POOP:
      return baseColors.brown
    case GlowbugKind.STAR:
      return baseColors.mint
    default:
      return baseColors.white
  }
}

const GlowingBug = styled.div<{
  $kind?: GlowbugKind
  $animation?: string
  $keyframesRule?: string
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ $kind }) => getColor($kind)};
  box-shadow: 0 0 10px 5px ${({ $kind }) => getColor($kind)};
  animation: glow 1.5s ease-in-out infinite;

  @keyframes glow {
    0% {
      box-shadow: 0 0 10px 5px ${({ $kind }) => getColor($kind)};
    }
    50% {
      box-shadow: 0 0 20px 15px ${({ $kind }) => getColor($kind)};
    }
    100% {
      box-shadow: 0 0 10px 5px ${({ $kind }) => getColor($kind)};
    }
  }

  @keyframes floating {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(30px, -30px, 0);
    }
    50% {
      transform: translate3d(-20px, 20px, 0);
    }
    75% {
      transform: translate3d(50px, 10px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  // Combine both animations (glow and floating) into a single animation
  animation: ${({ $animation }) =>
    `${$animation} 4s infinite ease-in-out, glow 1.5s infinite ease-in-out`};

  ${({ $keyframesRule }) => $keyframesRule}
`

export default GlowingBug
