import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

type PasswordStrength = 'weakest' | 'weak' | 'medium' | 'strong'

const passwordStrengthMap: Record<PasswordStrength, { label: string; color: string; count: number }> = {
  weakest: { label: 'Too weak!', color: 'var(--color-red)', count: 1 },
  weak: { label: 'Weak', color: 'var(--color-orange)', count: 2 },
  medium: { label: 'Medium', color: 'var(--color-yellow)', count: 3 },
  strong: { label: 'Strong', color: 'var(--color-green)', count: 4 },
}

export type PasswordStrengthProps = ComponentPropsWithoutRef<'div'> & {
  strength: PasswordStrength
}

export const PasswordStrength = ({ strength, ...props }: PasswordStrengthProps) => {
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
