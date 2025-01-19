import { Flex, Span } from '@chakra-ui/react'
import { GlowbugKindArray } from './Glowbug/utils'
import { Glowbug, GlowbugKind } from './Glowbug/types'
import { FaPlusCircle } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import { useCallback } from 'react'
import { StyledButton } from '@/system/Buttons'

type Props = {
  addBug: (bug: Glowbug) => void
}

const AddBugs = ({ addBug }: Props) => {
  const formattedName = (kind: GlowbugKind) =>
    kind[0] + kind.slice(1).toLowerCase()

  const onButtonClick = useCallback(
    (kind: GlowbugKind) => {
      addBug({
        id: uuidv4(),
        kind,
      })
    },
    [addBug]
  )

  return (
    <Flex gap={{ base: 8, mdDown: 2 }} flexDir={{ base: 'row' }}>
      {GlowbugKindArray.map((kind) => (
        <StyledButton
          variant={'primary'}
          onClick={() => onButtonClick(kind)}
          key={kind}
        >
          <FaPlusCircle />{' '}
          <Span display={{ base: 'block', smDown: 'none' }}>Add</Span>{' '}
          {formattedName(kind)}bug
        </StyledButton>
      ))}
    </Flex>
  )
}

export default AddBugs
