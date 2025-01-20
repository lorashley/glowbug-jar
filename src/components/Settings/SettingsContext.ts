import { createContext, useContext } from 'react'
import { SettingsContextValue } from './types'

export const useSettingsContext = () => useContext(SettingsContext)

const SettingsContext = createContext<SettingsContextValue>({
  goal: 10,
  setGoal: (goal: number) => {
    throw new Error(`SettingsContext not implemented setGoal: ${goal}`)
  },
  isChildlockOn: false,
  setChildlock: (isChildlockOn: boolean) => {
    throw new Error(
      `SettingsContext not implemented setChildlock: ${isChildlockOn}`
    )
  },
  clearSettings: () => {
    throw new Error('SettingsContext not implemented')
  },
})

export default SettingsContext
