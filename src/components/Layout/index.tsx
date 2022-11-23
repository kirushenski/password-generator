import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type LayoutProps = ComponentPropsWithoutRef<'div'>

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Wrapper {...props}>
      <main>{children}</main>
    </Wrapper>
  )
}
