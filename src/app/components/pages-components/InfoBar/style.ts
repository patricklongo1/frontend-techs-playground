import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: full;
  max-height: 11.6875rem;
  padding: 3.75rem;
  background-color: #444;

  display: flex;
  flex-direction: column;
`
export const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #fff;
`

export const Separator = styled.span`
  margin: 0 0.5rem;
`

export const CrumbLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.2s;
  font-size: 0.75rem;
  font-weight: 700;

  &:hover {
    color: #0070f3;
  }
`

export const LastCrumb = styled.span`
  text-decoration: none;
  color: #eee;
  font-size: 0.75rem;
  font-weight: 700;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: #eee;
`
