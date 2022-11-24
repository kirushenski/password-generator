import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import { FormValues } from './PasswordGenerator.hooks'
import { CharacterLength } from '~components/CharacterLength'
import { CharactersSettings } from '~components/CharactersSettings'
import { PasswordStrength } from '~components/PasswordStrength'
import { SubmitButton } from '~components/SubmitButton'
import { queries } from '~lib/mediaQueries'

export type FormProps = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> & {
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

  @media ${queries.mobile} {
    padding: var(--spacing-2);
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  @media ${queries.mobile} {
    gap: var(--spacing-2);
  }
`
