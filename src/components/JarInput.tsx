import { useCallback } from 'react'
import { Glowbug, GlowbugKind } from './Glowbug/types'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { HStack } from '@chakra-ui/react'
import { PrimaryButton } from '@/system/Buttons'

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
      <PrimaryButton onClick={onButtonClick}>Add Bug</PrimaryButton>
    </HStack>
  )
}

export default JarInput
