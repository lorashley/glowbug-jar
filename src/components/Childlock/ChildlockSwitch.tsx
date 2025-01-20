import { Icon, useDialog } from '@chakra-ui/react'

import { FaLock, FaLockOpen } from 'react-icons/fa'
import { useSettingsContext } from '../Settings/SettingsContext'
import { Switch } from '../ui/switch'
import ChildlockModal from './ChildlockModal'

const ChildlockSwitch = () => {
  const { isChildlockOn, setChildlock } = useSettingsContext()

  const dialog = useDialog()

  const onCheckedChange = (isChecked: boolean) => {
    if (!isChecked) {
      dialog.setOpen(true)
    } else {
      setChildlock(isChecked)
    }
  }

  return (
    <>
      <Switch
        size={'lg'}
        checked={isChildlockOn}
        colorPalette={'blue'}
        trackLabel={{
          on: (
            <Icon color="yellow.400">
              <FaLock />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaLockOpen />
            </Icon>
          ),
        }}
        onCheckedChange={(details) => onCheckedChange(details.checked)}
      />
      <ChildlockModal dialog={dialog} setChildlock={setChildlock} />
    </>
  )
}

export default ChildlockSwitch
