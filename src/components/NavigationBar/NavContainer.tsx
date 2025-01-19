import { Flex } from '@chakra-ui/react/flex'

type Props = {
  children: React.ReactNode
} & React.ComponentProps<typeof Flex>

const NavBarContainer = ({ children, ...props }: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={{
        base: 'space-between',
        smDown: 'center',
      }}
      wrap="wrap"
      w="100%"
      p={8}
      gap={10}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
}
export default NavBarContainer
