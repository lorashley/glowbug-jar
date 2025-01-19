import { IoSettingsSharp } from 'react-icons/io5'
import { HStack } from '@chakra-ui/react'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { StyledButton } from '@/system/Buttons'
import { NumberInputField, NumberInputRoot } from '../ui/number-input'
import { Field } from '../ui/field'
import { useCallback, useState } from 'react'
import { useSettingsContext } from './SettingsContext'
import { useTheme } from 'styled-components'

const Settings = () => {
  const theme = useTheme()
  const { goal, setGoal } = useSettingsContext()
  const title = 'Settings'

  const [formGoal, setFormGoal] = useState(goal)

  const onSave = useCallback(() => {
    setGoal(formGoal)
  }, [formGoal, setGoal])

  return (
    <HStack>
      <DialogRoot size={'md'}>
        <DialogTrigger asChild>
          <StyledButton variant="primary">
            <IoSettingsSharp />
            {title}
          </StyledButton>
        </DialogTrigger>
        <DialogContent backgroundColor={theme.colors.background}>
          <DialogHeader>
            <DialogTitle color={theme.colors.darkText}>{title}</DialogTitle>
          </DialogHeader>
          <DialogBody color={theme.colors.darkText}>
            <Field
              label="Enter Glowbug Goal"
              helperText="Enter a number between 10 and 100, default is 10"
            >
              <NumberInputRoot
                defaultValue={formGoal.toString()}
                min={10}
                max={100}
                onValueChange={(details) => setFormGoal(details.valueAsNumber)}
              >
                <NumberInputField />
              </NumberInputRoot>
            </Field>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <StyledButton variant="secondary">Cancel</StyledButton>
              </DialogActionTrigger>
              <DialogActionTrigger asChild>
                <StyledButton onClick={onSave}>Save</StyledButton>
              </DialogActionTrigger>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </HStack>
  )
}

export default Settings
