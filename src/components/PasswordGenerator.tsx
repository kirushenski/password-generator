import styled from 'styled-components'
import { FormProvider } from 'react-hook-form'
import { ComponentPropsWithoutRef } from 'react'
import { useGeneratePassword, usePasswordGeneratorForm } from './PasswordGenerator.hooks'
import { Password } from '~components/Password'
import { Form } from '~components/Form'
import { queries } from '~lib/mediaQueries'

export type PasswordGeneratorProps = ComponentPropsWithoutRef<'main'>

export const PasswordGenerator = (props: PasswordGeneratorProps) => {
  const form = usePasswordGeneratorForm()
  const { password, generatePassword } = useGeneratePassword()

  return (
    <Wrapper {...props}>
      <Heading>Password Generator</Heading>
      <Fields>
        <FormProvider {...form}>
          <Password password={password} />
          <Form onSubmit={generatePassword} />
        </FormProvider>
      </Fields>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  @media ${queries.mobile} {
    gap: var(--spacing-2);
  }
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  @media ${queries.mobile} {
    gap: var(--spacing-2);
  }
`

const Heading = styled.h1`
  text-align: center;
  font: var(--font-heading-m);

  @media ${queries.mobile} {
    font: var(--font-body-s);
  }
`
