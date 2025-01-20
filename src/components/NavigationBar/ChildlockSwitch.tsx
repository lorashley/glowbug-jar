import { Icon } from '@chakra-ui/react'

import { FaLock, FaLockOpen } from 'react-icons/fa'
import { useSettingsContext } from '../Settings/SettingsContext'
import { Switch } from '../ui/switch'

const ChildlockSwitch = () => {
  const { isChildlockOn, setChildlock } = useSettingsContext()

  return (
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
      onCheckedChange={(details) => setChildlock(details.checked)}
    />
  )
}

export default ChildlockSwitch
