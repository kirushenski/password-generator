import { ComponentPropsWithoutRef, useState } from 'react'
import styled from 'styled-components'
import * as Slider from '@radix-ui/react-slider'

export type CharacterLengthProps = ComponentPropsWithoutRef<'div'>

export const CharacterLength = ({ ...props }: CharacterLengthProps) => {
  const [value, setValue] = useState([10])
  return (
    <Wrapper {...props}>
      <Info>
        <h2>Character Length</h2>
        <Value>{value}</Value>
      </Info>
      <SliderRoot value={value} max={20} step={1} onValueChange={setValue} aria-label="Character Length">
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </SliderRoot>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

  @media (max-width: 479px) {
    gap: var(--spacing-1);
  }
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

const SliderRoot = styled(Slider.Root)`
  position: relative;
  height: calc(var(--spacing-base) * 3.5);
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
`

const SliderTrack = styled(Slider.Track)`
  position: relative;
  flex-grow: 1;
  height: var(--spacing-1);
  background-color: var(--color-black);
`

const SliderRange = styled(Slider.Range)`
  position: absolute;
  background-color: var(--color-green);
  height: 100%;
`

const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: calc(var(--spacing-base) * 3.5);
  height: calc(var(--spacing-base) * 3.5);
  background-color: var(--color-white);
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: move;
  transition: border-color var(--duration), background-color var(--duration);

  &:hover {
    border-color: var(--color-green);
    background-color: var(--color-black);
  }
`
