import { baseColors } from '@/system/colors'
import { JAR_WIDTH, JAR_HEIGHT } from '../Jar/styled'
import { GlowbugKind } from './types'

export const getRandomCoordinates = () => {
  const randomX = Math.random() * (JAR_WIDTH - 30) // Random X within jar width
  const randomY = Math.random() * (JAR_HEIGHT - 30) // Random Y within jar height
  return [randomX, randomY]
}

const getRandomDirection = () => {
  return Math.random() < 0.5 ? 1 : -1 // Randomly chooses left/right or up/down direction
}

export const getRandomDirectionPair = () => {
  return [getRandomDirection(), getRandomDirection()]
}

export const getGlowbugColor = (kind?: GlowbugKind) => {
  switch (kind) {
    case GlowbugKind.LOVE:
      return baseColors.red
    case GlowbugKind.POTTY:
      return baseColors.brightGreen
    case GlowbugKind.STAR:
      return baseColors.yellow
    default:
      return baseColors.white
  }
}

export const GlowbugKindArray = Object.values(GlowbugKind)
