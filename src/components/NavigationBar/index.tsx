import { H1 } from '@/system/Headings'
import { theme } from '@/system/theme'
import { Flex } from '@chakra-ui/react'
import NavBarContainer from './NavContainer'
import Settings from '../Settings'
import { StyledButton } from '@/system/Buttons'
import { FaTrashCanArrowUp } from 'react-icons/fa6'

type Props = {
  clearBugs: () => void
  canReleaseBugs: boolean
} & React.ComponentProps<typeof Flex>
const NavigationBar = ({ clearBugs, canReleaseBugs, ...props }: Props) => {
  return (
    <NavBarContainer {...props}>
      <H1 color={theme.colors.tertiary}>Glowbugs</H1>
      <Flex
        gap={{ base: 8, mdDown: 2 }}
        flexDir={{ base: 'row', smDown: 'column-reverse' }}
        alignItems={'center'}
      >
        <StyledButton
          variant={'secondary'}
          onClick={clearBugs}
          disabled={!canReleaseBugs}
        >
          <FaTrashCanArrowUp />
          Release the bugs
        </StyledButton>
        <Settings />
      </Flex>
    </NavBarContainer>
  )
}

export default NavigationBar
