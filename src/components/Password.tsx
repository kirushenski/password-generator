import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import IconCopy from '~icons/icon-copy.svg'

export type PasswordProps = ComponentPropsWithoutRef<'div'>

export const Password = ({ ...props }: PasswordProps) => {
  return (
    <Wrapper {...props}>
      <output>PTx1f5DaFX</output>
      <button type="button">
        <Icon title="Copy password" />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-4);
  height: var(--spacing-10);
  padding-inline: var(--spacing-4);
  font: var(--font-heading-l);
  background-color: var(--color-dark-grey);
  color: var(--color-white);
`

const Icon = styled(IconCopy)`
  color: var(--color-green);
`
