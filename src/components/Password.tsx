import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { useCopyPassword } from './Password.hooks'
import IconCopy from '~icons/icon-copy.svg'
import { queries } from '~lib/mediaQueries'

export type PasswordProps = ComponentPropsWithoutRef<'button'> & {
  password?: string
}

export const Password = ({ password, ...props }: PasswordProps) => {
  const { isPasswordCopied, isEmpty, canCopy, copyPassword } = useCopyPassword({ password })

  return (
    <Wrapper type="button" onClick={copyPassword} disabled={!canCopy} {...props}>
      <Value isEmpty={isEmpty}>{password ?? 'P4$5W0rD!'}</Value>
      <Copy>
        {isPasswordCopied && <span>Copied</span>}
        <Icon title="Copy password" />
      </Copy>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2);
  height: var(--spacing-10);
  padding-inline: var(--spacing-4);
  background-color: var(--color-dark-grey);
  color: var(--color-green);
  transition: color var(--duration);

  @media (hover: hover) and (pointer: fine) {
    &:not(:disabled):hover {
      color: var(--color-white);
    }
  }

  &:active {
    color: var(--color-white);
  }

  @media ${queries.mobile} {
    height: var(--spacing-8);
    padding-inline: var(--spacing-2);
  }
`

const Value = styled.output<{ isEmpty: boolean }>`
  white-space: nowrap;
  overflow: auto;
  font: var(--font-heading-l);
  color: ${({ isEmpty }) => (isEmpty ? 'var(--color-grey)' : 'var(--color-white)')};

  @media ${queries.mobile} {
    font: var(--font-heading-m);
  }
`

const Copy = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  text-transform: uppercase;
`

const Icon = styled(IconCopy)`
  @media ${queries.mobile} {
    width: 17px;
  }
`
