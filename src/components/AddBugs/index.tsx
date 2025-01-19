import { Flex } from '@chakra-ui/react'
import AddBugButton from './AddBugButton'
import { GlowbugKindArray } from '../Glowbug/utils'
import { Glowbug } from '../Glowbug/types'

type Props = {
  addBug: (bug: Glowbug) => void
}

const AddBugs = ({ addBug }: Props) => (
  <Flex
    gap={{ base: 8, smDown: 2 }}
    flexDir={{ base: 'row', smDown: 'column' }}
  >
    {GlowbugKindArray.map((kind) => (
      <AddBugButton key={kind} addBug={addBug} kind={kind} />
    ))}
  </Flex>
)

export default AddBugs
