import useLocalStorage from '@/hooks/useLocalStorage'
import { SettingsType } from './types'
import { useCallback } from 'react'
import SettingsContext from './SettingsContext'

type SettingsProviderProps = {
  children: React.ReactNode
}

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings, clearSettings] = useLocalStorage<SettingsType>(
    'settings',
    { goal: 10 }
  )

  const setGoal = useCallback(
    (goal: number) => {
      setSettings({ ...settings, goal })
    },
    [setSettings, settings]
  )

  return (
    <SettingsContext.Provider
      value={{ goal: settings.goal ?? 10, setGoal, clearSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
