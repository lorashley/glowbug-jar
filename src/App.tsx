import { useCallback } from 'react'
import Jar from './components/Jar'
import AddBugButton from './components/AddBugButton'
import { Glowbug } from './components/Glowbug/types'

import { GlowbugKindArray } from './components/Glowbug/utils'
import useLocalStorage from './hooks/useLocalStorage'
import Stats from './components/Stats'
import NavigationBar from './components/NavigationBar'
import { Flex } from '@chakra-ui/react'
import { theme } from './system/theme'
import { useSettingsContext } from './components/Settings/SettingsContext'

function App() {
  const [bugs, setBugs, clearBugs] = useLocalStorage<Glowbug[]>('glowbugs', [])
  const { goal } = useSettingsContext()
  const addBug = useCallback(
    (bug: Glowbug) => {
      setBugs([...bugs, bug])
    },
    [bugs, setBugs]
  )

  const removeBug = useCallback(
    (id: string) => {
      setBugs(bugs.filter((bug) => bug?.id !== id))
    },
    [bugs, setBugs]
  )

  const bugsCount = bugs.length

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
      <NavigationBar clearBugs={clearBugs} canReleaseBugs={bugsCount > 0} />
      <Jar bugs={bugs} removeBug={removeBug} />
      <Flex
        gap={{ base: 8, smDown: 2 }}
        flexDir={{ base: 'row', smDown: 'column' }}
      >
        {GlowbugKindArray.map((kind) => (
          <AddBugButton key={kind} addBug={addBug} kind={kind} />
        ))}
      </Flex>
      <Stats bugsCount={bugsCount} goal={goal} />
    </Flex>
  )
}

export default App
