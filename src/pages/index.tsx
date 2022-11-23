import styled from 'styled-components'
import { NextPage } from 'next'
import { Password } from '~components/Password'
import { Form } from '~components/Form'

const HomePage: NextPage = () => {
  return (
    <Wrapper>
      <Heading>Password Generator</Heading>
      <Fields>
        <Password password="PTx1f5DaFX" />
        <Form />
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
