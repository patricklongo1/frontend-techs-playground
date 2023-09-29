import styled from 'styled-components'
import Link from 'next/link'

interface ContainerProps {
  isExpanded: boolean
  href: string
}

export const Container = styled(Link)<ContainerProps>`
  text-decoration: none;
  width: ${(props) => (props.isExpanded ? '14.375rem' : '2.3125rem')};
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;

  height: 3.8125rem;
  border-radius: 3.125rem;
  background-color: #444;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 2.3125rem;
  }
`

export const NameContainer = styled.div`
  margin-left: 0.25rem;
  min-width: 11.875rem;
  overflow: hidden;
`

interface NameProps {
  children: string
}
export const Name = styled.h1<NameProps>`
  min-width: 100%;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`
