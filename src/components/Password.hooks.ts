/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useCallback, useState } from 'react'

const RESET_TIMEOUT = 1500

export const useCopyPassword = ({ password }: { password?: string }) => {
  const [isPasswordCopied, setIsPasswordCopied] = useState(false)
  const isEmpty = !password
  const canCopy = typeof navigator !== undefined && !isPasswordCopied && !isEmpty

  const copyPassword = useCallback(async () => {
    if (!canCopy || !navigator.clipboard) return

    await navigator.clipboard.writeText(password)
    setIsPasswordCopied(true)

    setTimeout(() => {
      setIsPasswordCopied(false)
    }, RESET_TIMEOUT)
  }, [canCopy, password])

  return { isPasswordCopied, isEmpty, canCopy, copyPassword }
}
