import useSwitch from '@/hooks/useSwitch'
import { PrimaryButton } from '@/system/Buttons'
import { theme } from '@/system/theme'
import { Box } from '@chakra-ui/react'
import { IoSettingsSharp } from 'react-icons/io5'

const Settings = () => {
  const [, , , toggleModal] = useSwitch()
  return (
    <Box
      flex={1}
      flexDir={{ base: 'row' }}
      display={{ base: 'flex' }}
      gap={{ base: '2' }}
      alignItems={{ base: 'center' }}
      position={{ base: 'absolute' }}
      top={{ base: '10' }}
      right={{ base: '10' }}
      color={theme.colors.lightText}
      onClick={toggleModal}
    >
      <PrimaryButton onClick={toggleModal}>
        <IoSettingsSharp />
        Settings
      </PrimaryButton>
    </Box>
  )
}

export default Settings
