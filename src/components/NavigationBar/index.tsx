import { H1 } from '@/system/Headings'
import { theme } from '@/system/theme'
import { Flex } from '@chakra-ui/react'
import NavBarContainer from './NavContainer'
import Settings from '../Settings'
import { StyledButton } from '@/system/Buttons'

type Props = {
  clearBugs: () => void
  canReleaseBugs: boolean
} & React.ComponentProps<typeof Flex>
const NavigationBar = ({ clearBugs, canReleaseBugs, ...props }: Props) => {
  return (
    <NavBarContainer {...props}>
      <H1 color={theme.colors.tertiary}>Glowbugs</H1>
      <Flex gap={4}>
        <StyledButton
          variant={'secondary'}
          onClick={clearBugs}
          disabled={!canReleaseBugs}
        >
          Release the bugs
        </StyledButton>
        <Settings />
      </Flex>
    </NavBarContainer>
  )
}

export default NavigationBar
