import { useCallback } from 'react'
import { Glowbug, GlowbugKind } from './Glowbug/types'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { Button } from '@/components/ui/button'
import { HStack } from '@chakra-ui/react'

type Props = {
  addBug: (bug: Glowbug) => void
}
function JarInput({ addBug }: Props) {
  const onButtonClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      addBug({
        id: uuidv4(),
        kind: GlowbugKind.PEE,
      })
    },
    [addBug]
  )

  return (
    <HStack>
      <Button onClick={onButtonClick}>Add Bug</Button>
    </HStack>
  )
}

export default JarInput
