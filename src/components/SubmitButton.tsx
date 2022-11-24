import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { FormValues } from './PasswordGenerator.hooks'
import IconArrowRight from '~icons/icon-arrow-right.svg'
import { queries } from '~lib/mediaQueries'

export type SubmitButtonProps = ComponentPropsWithoutRef<'button'>

export const SubmitButton = (props: SubmitButtonProps) => {
  const {
    formState: { isValid },
  } = useFormContext<FormValues>()

  return (
    <Wrapper type="submit" disabled={!isValid} {...props}>
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
  border: 2px solid transparent;
  background-color: var(--color-green);
  color: var(--color-dark-grey);
  text-transform: uppercase;
  transition: border-color var(--duration), color var(--duration), background-color var(--duration),
    opacity var(--duration);

  @media ${queries.mobile} {
    height: var(--spacing-7);
  }

  @media (hover: hover) and (pointer: fine) {
    &:not(:disabled):hover {
      border-color: var(--color-green);
      color: var(--color-green);
      background-color: transparent;
    }
  }

  &:active {
    border-color: var(--color-green);
    color: var(--color-green);
    background-color: transparent;
  }

  &:disabled {
    opacity: 0.3;
  }
`
