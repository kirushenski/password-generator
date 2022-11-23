import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { CharacterLength } from '~components/CharacterLength'
import { CharactersSettings } from '~components/CharactersSettings'
import { PasswordStrength } from '~components/PasswordStrength'
import { SubmitButton } from '~components/SubmitButton'

export type FormProps = ComponentPropsWithoutRef<'form'>

export const Form = ({ ...props }: FormProps) => {
  return (
    <Wrapper {...props}>
      <CharacterLength />
      <CharactersSettings />
      <PasswordStrength />
      <SubmitButton />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding: var(--spacing-4) var(--spacing-3) var(--spacing-3);
  background-color: var(--color-dark-grey);
  color: var(--color-white);
`
