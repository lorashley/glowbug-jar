import { useState, useCallback } from 'react'

type value = boolean
type TurnOn = () => void
type TurnOff = () => void
type Toggle = () => void

const useSwitch = (
  initialState: boolean = false
): [value, TurnOn, TurnOff, Toggle] => {
  const [state, setState] = useState<boolean>(initialState)

  const turnOn = useCallback(() => {
    setState(true)
  }, [])

  const turnOff = useCallback(() => {
    setState(false)
  }, [])

  const toggle = useCallback(() => {
    setState((prev) => !prev)
  }, [])

  return [state, turnOn, turnOff, toggle]
}

export default useSwitch
