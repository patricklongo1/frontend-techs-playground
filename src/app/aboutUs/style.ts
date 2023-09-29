import styled from 'styled-components'
import { ComponentChildProp } from '../utils/ComponentChildProp'

export const Content = styled.main<ComponentChildProp>`
  margin: 0rem auto;
  max-width: 25.5rem;
`

export const Title = styled.h1<ComponentChildProp>`
  font-weight: 600;
  font-size: 1.125rem;
  color: #444;
`

export const SubTitle = styled.h2<ComponentChildProp>`
  font-weight: 500;
  font-size: 1rem;
  color: #444;
`

export const Text = styled.p<ComponentChildProp>`
  font-weight: 500;
  font-size: 0.875rem;
  color: #444;
`
