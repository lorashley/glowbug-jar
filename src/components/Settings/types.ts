export type SettingsType = {
  goal: number
  isChildlockOn: boolean
}

export type SettingsContextValue = {
  goal: number
  setGoal: (goal: number) => void
  isChildlockOn: boolean
  setChildlock: (isChildlockOn: boolean) => void
  clearSettings: () => void
}
