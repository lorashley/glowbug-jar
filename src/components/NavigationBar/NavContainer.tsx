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
        mdDown: 'center',
      }}
      wrap="wrap"
      w="100%"
      p={{
        base: 4,
        mdDown: 2,
      }}
      gap={{
        base: 8,
        mdDown: 2,
      }}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
}
export default NavBarContainer
