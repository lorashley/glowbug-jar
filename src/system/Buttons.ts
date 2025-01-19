import { Button } from '@/components/ui/button'
import styled from 'styled-components'

export const BaseButton = styled(Button)`
  border-radius: 25px;
`

export const StyledButton = styled(BaseButton)<{
  variant?: 'primary' | 'secondary'
}>`
  background-color: ${({ theme, variant }) =>
    theme.buttons[variant || 'primary'].backgroundColor};
  color: ${({ theme, variant }) => theme.buttons[variant || 'primary'].color};
  font-weight: ${({ theme, variant }) =>
    theme.buttons[variant || 'primary'].fontWeight};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tan};
    color: ${({ theme }) => theme.colors.offWhite};
  }
`
