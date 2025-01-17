import React from 'react'
import Glowbug from './Glowbug'
import { Glowbug as GlowbugType } from './Glowbug/types'

type Props = {
  bugs: GlowbugType[]
  removeBug: (id: string) => void
}

const Jar = ({ bugs, removeBug }: Props) => {
  return (
    <div className="glowbug-jar">
      {bugs.map((bug) => (
        <Glowbug key={bug.id} bug={bug} onClick={() => removeBug(bug.id)} />
      ))}
    </div>
  )
}

export default Jar
