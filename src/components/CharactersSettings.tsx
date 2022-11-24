import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { useFormContext, useController } from 'react-hook-form'
import { FormValues } from './PasswordGenerator.hooks'
import IconCheck from '~icons/icon-check.svg'
import { queries } from '~lib/mediaQueries'

const settings: { value: string; label: string }[] = [
  { value: 'uppercase', label: 'Include Uppercase Letters' },
  { value: 'lowercase', label: 'Include Lowercase Letters' },
  { value: 'numbers', label: 'Include Numbers' },
  { value: 'symbols', label: 'Include Symbols' },
]

export type CharactersSettingsProps = ComponentPropsWithoutRef<'div'>

export const CharactersSettings = (props: CharactersSettingsProps) => {
  const { control } = useFormContext<FormValues>()
  const {
    field: { onChange, value },
  } = useController({ control, name: 'settings' })

  return (
    <div {...props}>
      <h2>
        <VisuallyHidden.Root>Characters settings</VisuallyHidden.Root>
      </h2>
      <Group>
        {settings.map((option) => (
          <Option key={option.value}>
            <CheckboxRoot
              aria-label={option.label}
              value={option.value}
              checked={value.includes(option.value)}
              onCheckedChange={(checked) => {
                let newValue
                if (checked) {
                  newValue = [...value, option.value]
                } else {
                  newValue = value.filter((v) => v !== option.value)
                }
                onChange(newValue)
              }}
            >
              <CheckboxIndicator forceMount>
                <IconCheck />
              </CheckboxIndicator>
            </CheckboxRoot>
            <span>{option.label}</span>
          </Option>
        ))}
      </Group>
    </div>
  )
}

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: -10px;

  @media ${queries.mobile} {
    margin-block: calc(-1 * var(--spacing-1));
  }
`

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding-block: 10px;
  cursor: pointer;

  @media ${queries.mobile} {
    gap: calc(var(--spacing-base) * 2.5);
    padding-block: var(--spacing-1);
  }
`

const CheckboxRoot = styled(Checkbox.Root)`
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color var(--duration), background-color var(--duration);

  &[data-state='checked'] {
    border-color: transparent;
    background-color: var(--color-green);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-green);
    }
  }

  &:active {
    border-color: var(--color-green);
  }
`

const CheckboxIndicator = styled(Checkbox.Indicator)`
  opacity: 0;
  transition: opacity var(--duration);

  &[data-state='checked'] {
    opacity: 1;
  }
`
