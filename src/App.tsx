import { useState, useCallback } from 'react'
import Jar from './components/Jar'
import AddBugButton from './components/AddBugButton'
import { Glowbug } from './components/Glowbug/types'
import React from 'react'
import { ButtonsOuter, Outer } from './styled'
import { H1 } from './system/Headings'
import { theme } from './system/theme'
import { Text } from '@chakra-ui/react'
import { GlowbugKindArray } from './components/Glowbug/utils'

function App() {
  const [bugs, setBugs] = useState<Glowbug[]>([])
  // TODO: hook up to work with local storage
  //   () => {
  //   const localStorageBugs = localStorage.getItem("glowbugs")
  //   if(!localStorageBugs) return []
  //   return JSON.parse(localStorageBugs) || [];
  // }
  // useEffect(() => {
  //   localStorage.setItem("glowbugs", JSON.stringify(bugs));
  // }, [bugs]);

  const addBug = (bug: Glowbug) => setBugs((prevBugs) => [...prevBugs, bug])
  const removeBug = useCallback((id: string) => {
    setBugs((prevBugs) => prevBugs.filter((bug) => bug?.id !== id))
  }, [])

  return (
    <Outer>
      <H1 color={theme.colors.tertiary}>Glowbugs</H1>
      <Jar bugs={bugs} removeBug={removeBug} />
      <ButtonsOuter>
        {' '}
        {GlowbugKindArray.map((kind) => (
          <AddBugButton key={kind} addBug={addBug} kind={kind} />
        ))}
      </ButtonsOuter>

      <Text textStyle="md" color={theme.colors.lightText}>
        Bug count: {bugs.length}
      </Text>
    </Outer>
  )
}

export default App
