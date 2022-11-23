import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type PasswordStrengthProps = ComponentPropsWithoutRef<'div'>

export const PasswordStrength = ({ ...props }: PasswordStrengthProps) => {
  return (
    <Wrapper {...props}>
      <Heading>Strength</Heading>
      <Value>Medium</Value>
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

const Value = styled.output`
  font: var(--font-heading-m);
`
