import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Garante que o modal esteja acima de outros elementos */
  background-color: rgba(0, 0, 0, 0.5); /* Sobreposição semi-transparente */
`
export const Content = styled.div`
  width: 25.5rem;
  height: 19rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #df8686;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  color: #444;
`

export const Icon = styled(Image)``

export const Message = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  color: #444;
`

export const Button = styled.button`
  width: 17rem;
  height: 2.625rem;
  background-color: #444;
  border-radius: 1.875rem;

  font-size: 0.875rem;
  font-weight: 700;
  font-family: var(--font-inter);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #aaa; /* Altere a cor desejada no hover */
  }
`
