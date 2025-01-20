import { H1 } from '@/system/Headings'
import { Flex } from '@chakra-ui/react/flex'
import { useTheme } from 'styled-components'

type Props = {
  children: React.ReactNode
} & React.ComponentProps<typeof Flex>

const NavBarContainer = ({ children, ...props }: Props) => {
  const theme = useTheme()
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
      <H1 color={theme.colors.tertiary}>Glowbugs</H1>
      <Flex
        gap={{ base: 8, mdDown: 2 }}
        flexDir={{ base: 'row', smDown: 'column-reverse' }}
        alignItems={'center'}
      >
        {children}
      </Flex>
    </Flex>
  )
}
export default NavBarContainer
