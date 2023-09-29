import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.nav`
  width: 18.75rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 16.5rem;
  }
`

interface SimpleButtonProps {
  /**
   * The path of triggered route
   */
  href: string
}

/**
 * A simple button component that navigates to the specified route.
 */
export const SimpleButton = styled(Link)<SimpleButtonProps>`
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: var(--font-inter);
  color: #444;

  &:hover {
    text-decoration: underline;
  }
`

interface FilledButtonProps {
  /**
   * The path of triggered route
   */
  href: string
}

/**
 * A simple button component that navigates to the specified route.
 */
export const FilledButton = styled(Link)<FilledButtonProps>`
  text-decoration: none;
  width: 10.75rem;
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
    background-color: #aaa;
  }
`
