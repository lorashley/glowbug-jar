import { Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.darkText};
`
