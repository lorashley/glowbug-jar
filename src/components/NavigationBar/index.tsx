import { H1 } from '@/system/Headings'
import { theme } from '@/system/theme'
import { Flex } from '@chakra-ui/react'
import NavBarContainer from './NavContainer'
import Settings from '../Settings'

const NavigationBar = ({ ...props }: React.ComponentProps<typeof Flex>) => {
  return (
    <NavBarContainer {...props}>
      <H1 color={theme.colors.tertiary}>Glowbugs</H1>
      <Settings />
    </NavBarContainer>
  )
}

export default NavigationBar
