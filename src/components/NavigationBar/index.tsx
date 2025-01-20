import { Flex } from '@chakra-ui/react'
import NavBarContainer from './NavContainer'
import Settings from '../Settings'
import { StyledButton } from '@/system/Buttons'
import { FaTrashCanArrowUp } from 'react-icons/fa6'
import ChildlockSwitch from '../Childlock/ChildlockSwitch'

type Props = {
  clearBugs: () => void
  canReleaseBugs: boolean
  isChildlockOn: boolean
} & React.ComponentProps<typeof Flex>
const NavigationBar = ({
  clearBugs,
  canReleaseBugs,
  isChildlockOn,
  ...props
}: Props) => {
  return (
    <NavBarContainer {...props}>
      {!isChildlockOn && (
        <>
          <StyledButton
            variant={'secondary'}
            onClick={clearBugs}
            disabled={!canReleaseBugs}
          >
            <FaTrashCanArrowUp />
            Release the bugs
          </StyledButton>
          <Settings />
        </>
      )}
      <ChildlockSwitch />
    </NavBarContainer>
  )
}

export default NavigationBar
