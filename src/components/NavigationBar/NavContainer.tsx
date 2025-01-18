import { useBreakpointValue } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react/flex'

type Props = {
  children: React.ReactNode
} & React.ComponentProps<typeof Flex>

const NavBarContainer = ({ children, ...props }: Props) => {
  const justifyContent = useBreakpointValue({
    base: 'space-between',
    lg: 'center',
  })

  return (
    <Flex
      as="nav"
      align="center"
      justify={justifyContent}
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
}
export default NavBarContainer
