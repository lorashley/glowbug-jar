import { useCallback } from 'react'
import { Glowbug, GlowbugKind } from '../Glowbug/types'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { HStack } from '@chakra-ui/react'
import { StyledButton } from '@/system/Buttons'
import { FaPlusCircle } from 'react-icons/fa'

type Props = {
  addBug: (bug: Glowbug) => void
  kind?: GlowbugKind
}
function AddBugButton({ addBug, kind = GlowbugKind.STAR }: Props) {
  const onButtonClick = useCallback(() => {
    addBug({
      id: uuidv4(),
      kind,
    })
  }, [addBug, kind])

  const formattedName = kind[0] + kind.slice(1).toLowerCase()

  return (
    <HStack>
      <StyledButton variant={'primary'} onClick={onButtonClick}>
        <FaPlusCircle /> Add {formattedName}bug
      </StyledButton>
    </HStack>
  )
}

export default AddBugButton
