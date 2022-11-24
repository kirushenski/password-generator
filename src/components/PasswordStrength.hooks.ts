import { useMemo } from 'react'
import { FormValues } from './PasswordGenerator.hooks'

type PasswordStrength = 'weakest' | 'weak' | 'medium' | 'strong'

interface PasswordStrengthData {
  label: string
  color: string
  count: number
}

const passwordStrengthMap: Record<PasswordStrength, PasswordStrengthData> = {
  weakest: { label: 'Too weak!', color: 'var(--color-red)', count: 1 },
  weak: { label: 'Weak', color: 'var(--color-orange)', count: 2 },
  medium: { label: 'Medium', color: 'var(--color-yellow)', count: 3 },
  strong: { label: 'Strong', color: 'var(--color-green)', count: 4 },
}

export const usePasswordStrength = ({ length, settings }: Partial<FormValues>) =>
  useMemo(() => {
    let strength: PasswordStrength = 'weakest'

    if (length && settings && settings.length) {
      if (
        (settings.length === 4 && length >= 10) ||
        (settings.length === 3 && length >= 12) ||
        (settings.length === 2 && length >= 14) ||
        (settings.length === 1 && length >= 16)
      ) {
        strength = 'strong'
      } else if (
        ((settings.length === 4 || settings.length === 3) && length >= 8) ||
        ((settings.length === 2 || settings.length === 1) && length >= 10)
      ) {
        strength = 'medium'
      } else if (length >= 6) {
        strength = 'weak'
      }
    }

    return passwordStrengthMap[strength]
  }, [length, settings])
