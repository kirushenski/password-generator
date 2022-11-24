import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import * as Slider from '@radix-ui/react-slider'
import { useFormContext, useController } from 'react-hook-form'
import { FormValues } from './PasswordGenerator.hooks'
import { queries } from '~lib/mediaQueries'

export type CharacterLengthProps = ComponentPropsWithoutRef<'div'>

const LABEL_TEXT = 'Character Length'

export const CharacterLength = (props: CharacterLengthProps) => {
  const { control } = useFormContext<FormValues>()
  const {
    field: { onChange, value },
  } = useController({ control, name: 'length' })

  return (
    <Wrapper {...props}>
      <Info>
        <h2>{LABEL_TEXT}</h2>
        <Value>{value}</Value>
      </Info>
      <SliderRoot value={[value]} onValueChange={(value) => onChange(value[0])} max={20} step={1}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb aria-label={LABEL_TEXT} />
      </SliderRoot>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);

  @media ${queries.mobile} {
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

  @media ${queries.mobile} {
    font: var(--font-heading-m);
  }
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

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--color-green);
      background-color: var(--color-black);
    }
  }

  &:active {
    border-color: var(--color-green);
    background-color: var(--color-black);
  }
`
