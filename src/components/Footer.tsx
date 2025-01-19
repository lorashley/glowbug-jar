import { StyledText } from '@/system/Text'
import { HStack } from '@chakra-ui/react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <HStack textAlign={'center'} padding={4}>
      <StyledText>
        © {year}{' '}
        <a href="http://github.com/lorashley" target="_blank">
          Lauren Ramgattie
        </a>{' '}
        - My toddler inspired React app
      </StyledText>
    </HStack>
  )
}

export default Footer
