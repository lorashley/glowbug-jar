import {
  DialogRootProvider,
  Flex,
  HStack,
  UseDialogReturn,
  Text,
} from '@chakra-ui/react'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { StyledButton } from '@/system/Buttons'
import { useTheme } from 'styled-components'
import { NumberInputField, NumberInputRoot } from '../ui/number-input'
import { Alert } from '../ui/alert'
import { useCallback, useState } from 'react'
import useGenerateMathProblem from './useGenerateMathProblem'

type Props = {
  dialog: UseDialogReturn
  setChildlock: (isChildlockOn: boolean) => void
}

const ChildlockModal = ({ dialog, setChildlock }: Props) => {
  const theme = useTheme()
  const title = 'Solve the math problem to unlock the childlock'

  const { mathProblem, generateMathProblem } = useGenerateMathProblem()

  const { firstNumber, secondNumber, operator, result } = mathProblem
  const expression = `${firstNumber} ${operator} ${secondNumber} =`

  const [answer, setAnswer] = useState<number>(0)
  const [isError, setIsError] = useState(false)

  const onSubmit = useCallback(() => {
    if (answer === result) {
      setIsError(false)
      setChildlock(false)
      dialog.setOpen(false)
    } else {
      setIsError(true)
    }
    setAnswer(0)
    generateMathProblem()
  }, [answer, dialog, generateMathProblem, result, setChildlock])

  return (
    <HStack>
      <DialogRootProvider value={dialog}>
        <DialogContent backgroundColor={theme.colors.background}>
          <DialogHeader>
            <DialogTitle
              color={theme.colors.darkText}
              fontFamily={theme.fonts.heading}
            >
              {title}
            </DialogTitle>
            {isError && (
              <Alert title="Alert Title" status={'error'}>
                Oops! That was not the correct answer. Please try again.
              </Alert>
            )}
          </DialogHeader>
          <DialogBody color={theme.colors.darkText}>
            <HStack justifyContent="center" mb={10}>
              {' '}
              <Text textStyle="5xl">{expression}</Text>
              <NumberInputRoot
                size={'lg'}
                value={answer.toString()}
                onValueChange={(details) => setAnswer(details.valueAsNumber)}
                min={0}
              >
                <NumberInputField />
              </NumberInputRoot>
            </HStack>

            <DialogFooter paddingX={0} mt={10} justifyContent={'space-between'}>
              <Flex gap={4}>
                <DialogActionTrigger asChild>
                  <StyledButton variant="secondary">Cancel</StyledButton>
                </DialogActionTrigger>
                <StyledButton onClick={onSubmit}>Submit</StyledButton>
              </Flex>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogBody>
        </DialogContent>
      </DialogRootProvider>
    </HStack>
  )
}

export default ChildlockModal
