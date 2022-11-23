import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type CharacterLengthProps = ComponentPropsWithoutRef<'div'>

export const CharacterLength = ({ ...props }: CharacterLengthProps) => {
  return (
    <Wrapper {...props}>
      <Info>
        <h2>Character Length</h2>
        <Value>10</Value>
      </Info>
      <div>Slider</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-4);
`

const Value = styled.output`
  font: var(--font-heading-l);
  color: var(--color-green);
`
