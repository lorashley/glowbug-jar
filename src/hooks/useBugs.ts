import Glowbug from '@/components/Glowbug'
import { useCallback } from 'react'
import useLocalStorage from './useLocalStorage'

const useBugs = (): {
  bugs: Glowbug[]
  addBug: (bug: Glowbug) => void
  removeBug: (id: string) => void
  clearBugs: () => void
  bugsCount: number
} => {
  const [bugs, setBugs, clearBugs] = useLocalStorage<Glowbug[]>('glowbugs', [])
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

  return {
    bugs,
    addBug,
    removeBug,
    clearBugs,
    bugsCount: bugs.length,
  }
}

export default useBugs
