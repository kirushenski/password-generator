import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import IconCheck from '~icons/icon-check.svg'

const settings: { value: string; label: string }[] = [
  { value: 'uppercase', label: 'Include Uppercase Letters' },
  { value: 'lowercase', label: 'Include Lowercase Letters' },
  { value: 'numbers', label: 'Include Numbers' },
  { value: 'symbols', label: 'Include Symbols' },
]

export type CharactersSettingsProps = ComponentPropsWithoutRef<'div'>

export const CharactersSettings = ({ ...props }: CharactersSettingsProps) => {
  return (
    <div {...props}>
      <VisuallyHidden.Root>
        <h2>Characters settings</h2>
      </VisuallyHidden.Root>
      <Group>
        {settings.map((option) => (
          <Option key={option.value}>
            <CheckboxRoot name="settings" value={option.value}>
              <CheckboxIndicator>
                <IconCheck />
              </CheckboxIndicator>
            </CheckboxRoot>
            <div>{option.label}</div>
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
`

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding-block: 10px;
  cursor: pointer;
`

const CheckboxRoot = styled(Checkbox.Root)`
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-state='checked'] {
    border-color: transparent;
    background-color: var(--color-green);
  }
`

const CheckboxIndicator = styled(Checkbox.Indicator)``
