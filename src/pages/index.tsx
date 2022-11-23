import styled from 'styled-components'
import { NextPage } from 'next'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { Password } from '~components/Password'
import { Form } from '~components/Form'
import { FormValues, schema } from '~lib/formSchema'
import { getRandomInteger } from '~lib/getRandomInteger'

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '1234567890'
const SYMBOLS = '!@#$%^&*'

// TODO Fix blink on hard page refresh (white screen)
// TODO Fix blink on page refresh (values)
// TODO Fix blinks on value change
// TODO Refactor logic into hooks
// TODO Don't repeat 479 media
// TODO Recap RHF usage
// TODO Check optimization with devtools
// TODO Check HTML & a11y tests
// TODO Fix long password field
// TODO Check crossbrowser support

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
            onSubmit={({ length, settings }) => {
              const isUppercase = settings.includes('uppercase')
              const isLowercase = settings.includes('lowercase')
              const isNumbers = settings.includes('numbers')
              const isSymbols = settings.includes('symbols')

              const alphabet = `${isUppercase ? UPPERCASE : ''}${isLowercase ? LOWERCASE : ''}${
                isNumbers ? NUMBERS : ''
              }${isSymbols ? SYMBOLS : ''}`

              const password = Array.from({ length }, () => {
                const randomIndex = getRandomInteger(0, alphabet.length - 1)
                return alphabet[randomIndex]
              }).join('')

              setPassword(password)
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
