import React from 'react'
import GlowingBug from './styled'
import type { Glowbug } from './types'

type Props = {
  bug: Glowbug
  onClick?: () => void
}

const Glowbug = ({ bug, onClick }: Props) => {
  return <GlowingBug $kind={bug.kind} onClick={onClick} />
}

export default Glowbug
