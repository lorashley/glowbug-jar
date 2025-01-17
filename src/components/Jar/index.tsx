import React from 'react'
import { Glowbug as GlowbugType } from '../Glowbug/types'
import { GlassJar, Glowbug, Outer } from './styled'

type Props = {
  bugs: GlowbugType[]
  removeBug: (id: string) => void
}

const Jar = ({ bugs, removeBug }: Props) => {
  return (
    <Outer>
      <GlassJar /> {/* Ensure this is rendered first */}
      {bugs.map((bug) => (
        <Glowbug key={bug.id} bug={bug} onClick={() => removeBug(bug.id)} />
      ))}
    </Outer>
  )
}

export default Jar
