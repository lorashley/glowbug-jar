export type SettingsType = {
  goal: number
}

export type SettingsContextValue = {
  goal: number
  setGoal: (goal: number) => void
  clearSettings: () => void
}
