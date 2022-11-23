import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
// import IconCheck from '~icons/icon-check.svg'

export type CharactersSettingsProps = ComponentPropsWithoutRef<'div'>

export const CharactersSettings = ({ ...props }: CharactersSettingsProps) => {
  return (
    <div {...props}>
      {/* <h2>Characters settings</h2> */}
      <Group>
        <div>Include Uppercase Letters</div>
        <div>Include Lowercase Letters</div>
        <div>Include Numbers</div>
        <div>Include Symbols</div>
      </Group>
    </div>
  )
}

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing-base) * 2.5);
`
