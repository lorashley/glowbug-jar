import { Button } from '@/components/ui/button'
import styled from 'styled-components'

export const BaseButton = styled(Button)`
  border-radius: 25px;
`

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
`

export const SecondaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightText};
`
