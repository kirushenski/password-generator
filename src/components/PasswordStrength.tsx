import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { useWatch } from 'react-hook-form'
import { FormValues } from './PasswordGenerator.hooks'
import { usePasswordStrength } from './PasswordStrength.hooks'
import { queries } from '~lib/mediaQueries'

export type PasswordStrengthProps = ComponentPropsWithoutRef<'div'>

export const PasswordStrength = (props: PasswordStrengthProps) => {
  const { length, settings } = useWatch<FormValues>()
  const { label, color, count } = usePasswordStrength({ length, settings })

  return (
    <Wrapper {...props}>
      <Heading>Strength</Heading>
      <Output>
        <span>{label}</span>
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
  gap: var(--spacing-1);
  background-color: var(--color-black);
  text-transform: uppercase;

  @media ${queries.mobile} {
    height: var(--spacing-7);
    padding-inline: var(--spacing-2);
  }
`

const Heading = styled.h2`
  color: var(--color-grey);
`

const Output = styled.output`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font: var(--font-heading-m);

  @media ${queries.mobile} {
    font: var(--font-body);
  }
`

const Boxes = styled.span`
  display: flex;
  gap: var(--spacing-1);
`

const Box = styled.span<{ color?: string }>`
  width: 10px;
  height: 28px;
  border: 2px solid ${({ color }) => (color ? 'transparent' : 'var(--color-white)')};
  background-color: ${({ color }) => color};
  transition: border-color var(--duration), background-color var(--duration);
`
