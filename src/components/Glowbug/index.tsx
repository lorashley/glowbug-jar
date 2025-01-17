import React, { useMemo } from 'react'
import type { Glowbug } from './types'
import { GlowingBug } from './styled'
import {
  getGlowbugColor,
  getRandomCoordinates,
  getRandomDirectionPair,
} from './utils'

type Props = {
  bug: Glowbug
  onClick?: () => void
}

const Glowbug = ({ bug, onClick }: Props) => {
  const [x, y] = useMemo(() => getRandomCoordinates(), [bug.id])
  const [xPath, yPath] = useMemo(() => getRandomDirectionPair(), [bug.id])
  const color = useMemo(() => getGlowbugColor(bug.kind), [bug.kind])
  return (
    <GlowingBug
      $uniqueId={bug.id}
      $isHeart={bug.kind === 'LOVE'}
      $color={color}
      $randomX={x}
      $randomY={y}
      $xPath={xPath}
      $yPath={yPath}
      onClick={onClick}
    />
  )
}

export default Glowbug
