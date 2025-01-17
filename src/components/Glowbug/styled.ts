import styled from 'styled-components';
import { GlowbugKind } from './types';


const getColor = (kind?: GlowbugKind) => {
    switch (kind) {
        case GlowbugKind.PEE:
          return 'yellow';
        case GlowbugKind.LOVE:
          return 'red'; 
        case GlowbugKind.POOP:
          return 'brown'; 
        case GlowbugKind.STAR:
          return 'white'; 
        default:
          return 'white';
      }
}


const GlowingBug = styled.div<{$kind?: GlowbugKind}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color:  ${({ $kind }) => getColor($kind)};
  box-shadow: 0 0 10px 5px ${({ $kind }) => getColor($kind)};;
  animation: glow 1.5s ease-in-out infinite;

  @keyframes glow {
    0% {
      box-shadow: 0 0 10px 5px ${({ $kind }) => getColor($kind)};;
    }
    50% {
      box-shadow: 0 0 20px 15px ${({ $kind }) => getColor($kind)};;
    }
    100% {
      box-shadow: 0 0 10px 5px ${({ $kind }) => getColor($kind)};;
    }
  }
`;

export default GlowingBug;
