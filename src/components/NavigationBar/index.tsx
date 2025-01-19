import { H1 } from '@/system/Headings'
import { theme } from '@/system/theme'
import { Flex } from '@chakra-ui/react'
import NavBarContainer from './NavContainer'
import Settings from '../Settings'
import { SecondaryButton } from '@/system/Buttons'

type Props = {
  clearBugs: () => void
  canReleaseBugs: boolean
} & React.ComponentProps<typeof Flex>
const NavigationBar = ({ clearBugs, canReleaseBugs, ...props }: Props) => {
  return (
    <NavBarContainer {...props}>
      <H1 color={theme.colors.tertiary}>Glowbugs</H1>
      <Flex gap={4}>
        <SecondaryButton onClick={clearBugs} disabled={!canReleaseBugs}>
          Release the bugs
        </SecondaryButton>
        <Settings />
      </Flex>
    </NavBarContainer>
  )
}

export default NavigationBar
