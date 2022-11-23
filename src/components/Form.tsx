import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import { CharacterLength } from '~components/CharacterLength'
import { CharactersSettings } from '~components/CharactersSettings'
import { PasswordStrength } from '~components/PasswordStrength'
import { SubmitButton } from '~components/SubmitButton'
import { FormValues } from '~lib/formSchema'

export type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSubmit: SubmitHandler<FormValues>
}

export const Form = ({ onSubmit, ...props }: FormProps) => {
  const { handleSubmit } = useFormContext<FormValues>()

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} {...props}>
      <CharacterLength />
      <CharactersSettings />
      <Group>
        <PasswordStrength />
        <SubmitButton />
      </Group>
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

  @media (max-width: 479px) {
    padding: var(--spacing-2);
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  @media (max-width: 479px) {
    gap: var(--spacing-2);
  }
`
