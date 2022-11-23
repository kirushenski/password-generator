/* eslint-disable @typescript-eslint/no-misused-promises */
import { ComponentPropsWithoutRef, useState } from 'react'
import styled from 'styled-components'
import IconCopy from '~icons/icon-copy.svg'

const RESET_TIMEOUT = 1000

export type PasswordProps = ComponentPropsWithoutRef<'button'> & {
  password?: string
}

export const Password = ({ password, ...props }: PasswordProps) => {
  const [isPasswordCopied, setIsPasswordCopied] = useState(false)
  const isEmpty = !password
  const canCopy = !isPasswordCopied && !isEmpty

  const handleCopy = async () => {
    if (!canCopy) return

    await navigator.clipboard.writeText(password)
    setIsPasswordCopied(true)

    setTimeout(() => {
      setIsPasswordCopied(false)
    }, RESET_TIMEOUT)
  }

  return (
    <Wrapper type="button" onClick={handleCopy} disabled={!canCopy} {...props}>
      <Value isEmpty={isEmpty}>{password ?? 'P4$5W0rD!'}</Value>
      <Copy>
        {isPasswordCopied && <span>Copied</span>}
        <IconCopy title="Copy password" />
      </Copy>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-4);
  height: var(--spacing-10);
  padding-inline: var(--spacing-4);
  background-color: var(--color-dark-grey);
  color: var(--color-green);
  transition: color var(--duration);

  &:not(:disabled):hover {
    color: var(--color-white);
  }

  @media (max-width: 479px) {
    height: var(--spacing-8);
    padding-inline: var(--spacing-2);
  }
`

const Value = styled.output<{ isEmpty: boolean }>`
  font: var(--font-heading-l);
  color: ${({ isEmpty }) => (isEmpty ? 'var(--color-grey)' : 'var(--color-white)')};
`

const Copy = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  text-transform: uppercase;
`
