import { useCallback } from 'react'
import { Glowbug, GlowbugKind } from './Glowbug/types'
import { getGlowbugColor } from './Glowbug/utils'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { HStack } from '@chakra-ui/react'
import { PrimaryButton } from '@/system/Buttons'

type Props = {
  addBug: (bug: Glowbug) => void
  kind?: GlowbugKind
}
function AddBugButton({ addBug, kind = GlowbugKind.PEE }: Props) {
  const onButtonClick = useCallback(() => {
    addBug({
      id: uuidv4(),
      kind,
    })
  }, [addBug, kind])

  const formattedName = kind[0] + kind.slice(1).toLowerCase()

  return (
    <HStack>
      <PrimaryButton
        backgroundColor={getGlowbugColor(kind)}
        onClick={onButtonClick}
      >
        Add {formattedName}bug
      </PrimaryButton>
    </HStack>
  )
}

export default AddBugButton
