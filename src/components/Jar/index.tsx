import React from 'react'
import Glowbug from '../Glowbug'
import { Glowbug as GlowbugType } from '../Glowbug/types'
import { Outer } from './styled'

type Props = {
  bugs: GlowbugType[]
  removeBug: (id: string) => void
}

const Jar = ({ bugs, removeBug }: Props) => {
  return (
    <Outer>
      {bugs.map((bug) => (
        <Glowbug key={bug.id} bug={bug} onClick={() => removeBug(bug.id)} />
      ))}
    </Outer>
  )
}

export default Jar
