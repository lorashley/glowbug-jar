import { useState, useCallback } from 'react'
import Jar from './components/Jar'
import JarInput from './components/JarInput'
import { Glowbug } from './components/Glowbug/types'
import React from 'react'
import { Outer } from './styled'

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
      <h1>My Glowbugs</h1>
      <JarInput addBug={addBug} />
      <Jar bugs={bugs} removeBug={removeBug} />
      <p>Bug count: {bugs.length}</p>
    </Outer>
  )
}

export default App
