import { theme } from '@/system/theme'
import { StatRoot, StatLabel, StatValueText, StatValueUnit } from './ui/stat'
import React, { useMemo } from 'react'
import { ProgressBar, ProgressRoot, ProgressValueText } from './ui/progress'

type Props = {
  bugsCount: number
  goal: number
}

const Stats = ({ bugsCount, goal }: Props) => {
  const percentage = useMemo(
    () => Math.floor((bugsCount / goal) * 100),
    [bugsCount, goal]
  )
  return (
    <StatRoot color={theme.colors.tertiary}>
      <StatLabel color={theme.colors.tertiary}>You've caught</StatLabel>
      <StatValueText alignItems="baseline">
        {`${bugsCount} `}
        <StatValueUnit color={theme.colors.tertiary}>bugs of</StatValueUnit>
        {` ${goal}`}
      </StatValueText>
      <ProgressRoot width={'xs'} value={percentage} colorPalette={'orange'}>
        <ProgressBar color={theme.colors.tertiary} />
        <ProgressValueText>{percentage}%</ProgressValueText>
      </ProgressRoot>
    </StatRoot>
  )
}

export default Stats
