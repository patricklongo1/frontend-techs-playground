import styled from 'styled-components'
import Image from 'next/image'
import { ComponentChildProp } from './utils/ComponentChildProp'

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);
  overflow: hidden;

  display: flex;
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const MainText = styled.p<ComponentChildProp>`
  width: 31.25rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #fff;

  align-self: center;
  margin: 0rem auto;
`
