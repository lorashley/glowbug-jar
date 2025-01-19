import { StyledText } from '@/system/Text'
import { HStack } from '@chakra-ui/react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <HStack>
      <StyledText>
        © {year}{' '}
        <a href="http://github.com/lorashley" target="_blank">
          Lauren Ramgattie
        </a>{' '}
        - My toddler inspired react app
      </StyledText>
    </HStack>
  )
}

export default Footer
