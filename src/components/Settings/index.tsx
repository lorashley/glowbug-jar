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
import { PrimaryButton } from '@/system/Buttons'
import { Button } from '../ui/button'
import { NumberInputField, NumberInputRoot } from '../ui/number-input'
import { Field } from '../ui/field'
import { useCallback, useState } from 'react'
import { useSettingsContext } from './SettingsContext'

const Settings = () => {
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
          <PrimaryButton variant="outline">
            <IoSettingsSharp />
            {title}
          </PrimaryButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <DialogBody>
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
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button onClick={onSave}>Save</Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </HStack>
  )
}

export default Settings
