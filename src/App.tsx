import { useCallback, useMemo } from 'react'
import Jar from './components/Jar'
import AddBugButton from './components/AddBugButton'
import { Glowbug } from './components/Glowbug/types'
import { ButtonsOuter, Outer } from './styled'
import { H1 } from './system/Headings'
import { theme } from './system/theme'
import { GlowbugKindArray } from './components/Glowbug/utils'
import useLocalStorage from './hooks/useLocalStorage'
import {
  StatRoot,
  StatLabel,
  StatValueText,
  StatValueUnit,
} from '@/components/ui/stat'

function App() {
  const [bugs, setBugs] = useLocalStorage<Glowbug[]>('glowbugs', [])
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
  const percentage = useMemo(() => (bugsCount / goal) * 100, [bugsCount, goal])
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

      <StatRoot color={theme.colors.tertiary}>
        <StatLabel color={theme.colors.tertiary}>You've caught</StatLabel>

        <StatValueText alignItems="baseline">
          {bugsCount}{' '}
          <StatValueUnit color={theme.colors.tertiary}>bugs</StatValueUnit>
        </StatValueText>
      </StatRoot>
    </Outer>
  )
}

export default App
