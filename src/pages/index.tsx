import styled from 'styled-components'
import { NextPage } from 'next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Password } from '~components/Password'
import { Form } from '~components/Form'
import { FormValues, schema } from '~lib/formSchema'

// TODO Write generate password logic

const HomePage: NextPage = () => {
  const [password, setPassword] = useState<string>()

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      length: 10,
      settings: ['uppercase', 'lowercase', 'numbers'],
    },
  })

  return (
    <Wrapper>
      <Heading>Password Generator</Heading>
      <Fields>
        <FormProvider {...form}>
          <Password password={password} />
          <Form
            onSubmit={(values) => {
              console.log('generate password', values)
              setPassword('PTx1f5DaFX')
            }}
          />
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

  @media (max-width: 479px) {
    gap: var(--spacing-2);
  }
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  @media (max-width: 479px) {
    gap: var(--spacing-2);
  }
`

const Heading = styled.h1`
  text-align: center;
  font: var(--font-heading-m);
`

export default HomePage
