import styled from 'styled-components'

export const GlowingBug = styled.div<{
  $uniqueId: string // for animations
  $isHeart?: boolean
  $color: string
  $randomX: number
  $randomY: number
  $xPath: number
  $yPath: number
  $duration?: number
}>`
  position: absolute; /* Absolute positioning for random movement */
  top: ${({ $randomY }) => `${$randomY}px`};
  left: ${({ $randomX }) => `${$randomX}px`};

  /* Heart shape specific styles */
  ${({ $isHeart, $color }) =>
    $isHeart &&
    `
      width: 25px;
      height: 25px;
      background-color: ${$color};
      box-shadow: 0 0 10px 5px ${$color};
      transform: translate(-50%, -50%) rotate(-45deg); /* Center and rotate for heart shape */
      border-radius: 50% 50% 0 0; /* Top rounded corners for heart shape */

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: ${$color};
        border-radius: 50%;
      }

      &::before {
        top: -12.5px;
        left: 0;
      }

      &::after {
        top: 0;
        left: 12.5px;
      }
    `}

  /* Circle shape (default if $isHeart is not true) */
  ${({ $isHeart, $color }) =>
    !$isHeart &&
    `
      width: 25px;
      height: 25px;
      background-color: ${$color};
      box-shadow: 0 0 10px 5px ${$color};
      border-radius: 50%; /* Ensures a perfect circle */
    `}

  animation: ${({ $uniqueId, $duration }) =>
    `floating-${$uniqueId} ${$duration}s infinite ease-in-out, glow-${$uniqueId} ${$duration}s infinite ease-in-out`};

  ${({ $color, $uniqueId, $xPath, $yPath }) => `
    @keyframes glow-${$uniqueId} {
      0% {
        box-shadow: 0 0 5px 5px ${$color};
      }
      25% {
        box-shadow: 0 0 10px 5px ${$color};
      }
      50% {
        box-shadow: 0 0 20px 15px ${$color};
      }
      100% {
        box-shadow: 0 0 10px 5px ${$color};
      }
    }

@keyframes floating-${$uniqueId} {
      0% {
        transform: translate(-50%, -50%) translate3d(0, 0, 0);
      }
      25% {
        transform: translate(-50%, -50%) translate3d(${$xPath * 30}px, ${$yPath * -30}px, 0);
      }
      50% {
        transform: translate(-50%, -50%) translate3d(${$xPath * -20}px, ${$yPath * 20}px, 0);
      }
      75% {
        transform: translate(-50%, -50%) translate3d(${$xPath * 50}px, ${$yPath * 10}px, 0);
      }
      100% {
        transform: translate(-50%, -50%) translate3d(0, 0, 0);
      }
    }
  `}
`
