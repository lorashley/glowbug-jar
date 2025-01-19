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

const Settings = () => {
  const title = 'Settings'
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
              helperText="Enter a number between 10 and 100"
            >
              <NumberInputRoot defaultValue="10" min={10} max={100}>
                <NumberInputField />
              </NumberInputRoot>
            </Field>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button>Save</Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </HStack>
  )
}

export default Settings
