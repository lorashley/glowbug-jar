import { useCallback } from 'react'
import Jar from './components/Jar'
import AddBugButton from './components/AddBugButton'
import { Glowbug } from './components/Glowbug/types'
import { ButtonsOuter, Outer } from './styled'

import { GlowbugKindArray } from './components/Glowbug/utils'
import useLocalStorage from './hooks/useLocalStorage'
import Stats from './components/Stats'
import NavigationBar from './components/NavigationBar'

function App() {
  const [bugs, setBugs, clearBugs] = useLocalStorage<Glowbug[]>('glowbugs', [])
  const goal = 20
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
    <Outer>
      <NavigationBar clearBugs={clearBugs} canReleaseBugs={bugsCount > 0} />
      <Jar bugs={bugs} removeBug={removeBug} />
      <ButtonsOuter>
        {' '}
        {GlowbugKindArray.map((kind) => (
          <AddBugButton key={kind} addBug={addBug} kind={kind} />
        ))}
      </ButtonsOuter>
      <Stats bugsCount={bugsCount} goal={goal} />
    </Outer>
  )
}

export default App
