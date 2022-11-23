import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import IconArrowRight from '~icons/icon-arrow-right.svg'

export type SubmitButtonProps = ComponentPropsWithoutRef<'button'>

export const SubmitButton = ({ ...props }: SubmitButtonProps) => {
  return (
    <Wrapper type="submit" {...props}>
      <span>Generate</span>
      <IconArrowRight />
    </Wrapper>
  )
}

const Wrapper = styled.button`
  height: var(--spacing-8);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3);
  background-color: var(--color-green);
  color: var(--color-dark-grey);
  text-transform: uppercase;
`
