import { JAR_WIDTH, JAR_HEIGHT } from '../Jar/styled'

const TRANSLATE_OFFSET = 30
export const getRandomFloatAnimation = () => {
  const randomX = Math.random() * (JAR_WIDTH - 10) // Random X within jar width
  const randomY = Math.random() * (JAR_HEIGHT - 10) // Random Y within jar height
  //const randomDuration = Math.random() * 5 + 3 // Random duration between 3s and 8s

  return `
      0% {
        transform: translate3d(${randomX}px, ${randomY}px, 0);
      }
      50% {
        transform: translate3d(${randomX + Math.random() * TRANSLATE_OFFSET}px, ${randomY + Math.random() * TRANSLATE_OFFSET}px, 0);
      }
      100% {
        transform: translate3d(${randomX - Math.random() * TRANSLATE_OFFSET}px, ${randomY - Math.random() * TRANSLATE_OFFSET}px, 0);
      }
    `
}
