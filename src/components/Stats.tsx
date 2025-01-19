import { StatRoot, StatLabel, StatValueText, StatValueUnit } from './ui/stat'
import { useMemo } from 'react'
import { ProgressBar, ProgressRoot, ProgressValueText } from './ui/progress'
import { Box } from '@chakra-ui/react/box'

type Props = {
  bugsCount: number
  goal: number
}

const Stats = ({ bugsCount, goal }: Props) => {
  const percentage = useMemo(
    () => Math.min(Math.floor((bugsCount / goal) * 100), 100),
    [bugsCount, goal]
  )
  return (
    <Box bg={'wheat'} p={4} borderRadius={8}>
      <StatRoot>
        <StatLabel>You've caught</StatLabel>
        <StatValueText alignItems="baseline">
          {`${bugsCount} `}
          <StatValueUnit>bugs of</StatValueUnit>
          {` ${goal}`}
        </StatValueText>
        <ProgressRoot width={'xs'} value={percentage} colorPalette={'orange'}>
          <ProgressBar />
          <ProgressValueText>{percentage}%</ProgressValueText>
        </ProgressRoot>
      </StatRoot>
    </Box>
  )
}

export default Stats
