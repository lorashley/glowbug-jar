import { baseColors } from '@/system/colors'
import { JAR_WIDTH, JAR_HEIGHT } from '../Jar/styled'
import { GlowbugKind } from './types'

export const getRandomCoordinates = () => {
  const padding = 30 // Maximum translate distance from animation
  const randomX = Math.random() * (JAR_WIDTH - padding * 2) + padding // Ensures bugs start within safe bounds
  const randomY = Math.random() * (JAR_HEIGHT - padding * 2) + padding
  return [randomX, randomY]
}

const getRandomDirection = () => {
  return Math.random() < 0.5 ? 1 : -1 // Randomly chooses left/right or up/down direction
}

export const getRandomDuration = () => {
  return Math.random() * 10 + Math.random() * 10
}

export const getRandomDirectionPair = () => {
  return [getRandomDirection(), getRandomDirection()]
}

export const getGlowbugColor = (kind?: GlowbugKind) => {
  switch (kind) {
    case GlowbugKind.LOVE:
      return baseColors.warmPink
    case GlowbugKind.POTTY:
      return baseColors.appGreen
    case GlowbugKind.STAR:
      return baseColors.warmYellow
    default:
      return baseColors.appBlue
  }
}

export const GlowbugKindArray = Object.values(GlowbugKind)
