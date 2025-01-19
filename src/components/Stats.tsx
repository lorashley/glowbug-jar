import { StatRoot, StatLabel, StatValueText, StatValueUnit } from './ui/stat'
import { useMemo } from 'react'
import { ProgressBar, ProgressRoot, ProgressValueText } from './ui/progress'
import { Box } from '@chakra-ui/react/box'
import { useTheme } from 'styled-components'

type Props = {
  bugsCount: number
  goal: number
}

const Stats = ({ bugsCount, goal }: Props) => {
  const theme = useTheme()
  const percentage = useMemo(
    () => Math.min(Math.floor((bugsCount / goal) * 100), 100),
    [bugsCount, goal]
  )
  return (
    <Box
      bg={theme.colors.lightYellow}
      color={theme.colors.brown}
      p={4}
      borderRadius={8}
    >
      <StatRoot>
        <StatLabel color={theme.colors.brown} fontWeight={'bold'}>
          You've collected
        </StatLabel>
        <StatValueText alignItems="baseline">
          {`${bugsCount} `}
          <StatValueUnit>bugs of</StatValueUnit>
          {` ${goal}`}
        </StatValueText>
        <ProgressRoot width={'xs'} value={percentage} colorPalette={'yellow'}>
          <ProgressBar color={theme.colors.orange} />
          <ProgressValueText>{percentage}%</ProgressValueText>
        </ProgressRoot>
      </StatRoot>
    </Box>
  )
}

export default Stats
