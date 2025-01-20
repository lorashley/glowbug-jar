import useLocalStorage from '@/hooks/useLocalStorage'
import { SettingsType } from './types'
import { useCallback } from 'react'
import SettingsContext from './SettingsContext'

const DEFAULT_SETTINGS = { goal: 10, isChildlockOn: false }

type SettingsProviderProps = {
  children: React.ReactNode
}

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings, clearSettings] = useLocalStorage<SettingsType>(
    'settings',
    DEFAULT_SETTINGS
  )

  const setGoal = useCallback(
    (goal: number) => {
      setSettings({ ...settings, goal })
    },
    [setSettings, settings]
  )

  const setChildlock = useCallback(
    (isChildlockOn: boolean) => {
      setSettings({ ...settings, isChildlockOn })
    },
    [setSettings, settings]
  )

  const { goal, isChildlockOn } = settings

  return (
    <SettingsContext.Provider
      value={{ goal, setGoal, isChildlockOn, setChildlock, clearSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
