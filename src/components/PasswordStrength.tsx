import { ComponentPropsWithoutRef, useMemo } from 'react'
import styled from 'styled-components'
import { useWatch } from 'react-hook-form'
import { FormValues } from '~lib/formSchema'

type PasswordStrength = 'weakest' | 'weak' | 'medium' | 'strong'

const passwordStrengthMap: Record<PasswordStrength, { label: string; color: string; count: number }> = {
  weakest: { label: 'Too weak!', color: 'var(--color-red)', count: 1 },
  weak: { label: 'Weak', color: 'var(--color-orange)', count: 2 },
  medium: { label: 'Medium', color: 'var(--color-yellow)', count: 3 },
  strong: { label: 'Strong', color: 'var(--color-green)', count: 4 },
}

export type PasswordStrengthProps = ComponentPropsWithoutRef<'div'>

export const PasswordStrength = ({ ...props }: PasswordStrengthProps) => {
  const { length, settings } = useWatch<FormValues>()
  const strength = useMemo<PasswordStrength>(() => {
    if (!length || !settings || !settings.length) return 'weakest'

    if (
      (settings.length === 4 && length >= 10) ||
      (settings.length === 3 && length >= 12) ||
      (settings.length === 2 && length >= 14) ||
      (settings.length === 1 && length >= 16)
    ) {
      return 'strong'
    }

    if (
      ((settings.length === 4 || settings.length === 3) && length >= 8) ||
      ((settings.length === 2 || settings.length === 1) && length >= 10)
    ) {
      return 'medium'
    }

    if (length >= 6) {
      return 'weak'
    }

    return 'weakest'
  }, [length, settings])

  const { label, color, count } = passwordStrengthMap[strength]

  return (
    <Wrapper {...props}>
      <Heading>Strength</Heading>
      <Output>
        <div>{label}</div>
        <Boxes>
          {[...Array(4).keys()].map((value) => (
            <Box key={value} color={value < count ? color : undefined} />
          ))}
        </Boxes>
      </Output>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: var(--spacing-9);
  padding-inline: var(--spacing-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-4);
  background-color: var(--color-black);
  text-transform: uppercase;
`

const Heading = styled.h2`
  color: var(--color-grey);
`

const Output = styled.output`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font: var(--font-heading-m);
`

const Boxes = styled.div`
  display: flex;
  gap: var(--spacing-1);
`

const Box = styled.div<{ color?: string }>`
  width: 10px;
  height: 28px;
  border: 2px solid ${({ color }) => (color ? 'transparent' : 'var(--color-white)')};
  background-color: ${({ color }) => color};
  transition: border-color var(--duration), background-color var(--duration);
`
