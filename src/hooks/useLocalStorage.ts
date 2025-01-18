import { useState, useEffect, useCallback } from 'react'

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] => {
  const [value, setValue] = useState<T>(() => {
    const lsValue = localStorage.getItem(key)
    return lsValue ? JSON.parse(lsValue) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  const clearLocalStorage = useCallback(() => {
    localStorage.removeItem(key)
  }, [key])

  return [value, setValue, clearLocalStorage]
}

export default useLocalStorage
