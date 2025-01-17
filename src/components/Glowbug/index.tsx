import React, { useMemo } from 'react'
import GlowingBug from './styled'
import type { Glowbug } from './types'
import { getRandomFloatAnimation } from './utils'

type Props = {
  bug: Glowbug
  onClick?: () => void
}

const Glowbug = ({ bug, onClick }: Props) => {
  const floatAnimation = useMemo(() => getRandomFloatAnimation(), [])

  return (
    <GlowingBug
      $kind={bug.kind}
      $animation={`floatBug${bug.id}`}
      $keyframesRule={`@keyframes floatBug${bug.id} { ${floatAnimation} }`}
      onClick={onClick}
    />
  )
}

export default Glowbug
