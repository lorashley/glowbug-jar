import Jar from './components/Jar'

import Stats from './components/Stats'
import NavigationBar from './components/NavigationBar'
import { Flex } from '@chakra-ui/react'
import { useSettingsContext } from './components/Settings/SettingsContext'
import Footer from './components/Footer'
import AddBugs from './components/AddBugs'
import useBugs from './hooks/useBugs'
import ConfettiExplosion from 'react-confetti-explosion'
import { baseColors } from './system/colors'
import { useTheme } from 'styled-components'

function App() {
  const { goal, isChildlockOn } = useSettingsContext()
  const { bugs, addBug, removeBug, clearBugs, bugsCount } = useBugs()
  const theme = useTheme()
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      w="100vw"
      backgroundColor={theme.colors.background}
      gap={{
        base: 8,
        smDown: 2,
      }}
      padding={10}
    >
      {bugsCount >= goal && (
        <ConfettiExplosion
          colors={[
            baseColors.appBlue,
            baseColors.appGreen,
            baseColors.appYellow,
            baseColors.appRed,
            baseColors.appOrange,
            baseColors.appPink,
            baseColors.appTeal,
          ]}
          duration={3000}
        />
      )}
      <NavigationBar
        clearBugs={clearBugs}
        canReleaseBugs={bugsCount > 0}
        isChildlockOn={isChildlockOn}
      />
      <Jar bugs={bugs} removeBug={!isChildlockOn ? removeBug : undefined} />
      {!isChildlockOn && <AddBugs addBug={addBug} />}
      <Stats bugsCount={bugsCount} goal={goal} />
      <Footer />
    </Flex>
  )
}

export default App
