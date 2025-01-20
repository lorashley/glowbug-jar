import { useState } from 'react'

type MathProblem = {
  firstNumber: number
  secondNumber: number
  operator: '+' | '-'
  result: number
}

const useGenerateMathProblem = () => {
  const [mathProblem, setMathProblem] = useState<MathProblem>({
    firstNumber: 2,
    secondNumber: 3,
    operator: '+',
    result: 5,
  })

  const generateMathProblem = () => {
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    const firstNumber = Math.max(num1, num2)
    const secondNumber = Math.min(num1, num2)
    const operator = Math.random() < 0.5 ? '+' : '-'
    const result =
      operator === '+' ? firstNumber + secondNumber : firstNumber - secondNumber

    setMathProblem({
      firstNumber,
      secondNumber,
      operator,
      result,
    })
  }

  return { mathProblem, generateMathProblem }
}

export default useGenerateMathProblem
