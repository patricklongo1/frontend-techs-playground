import React from 'react'
import { render, screen } from '@testing-library/react'
import MainNav from './index'

describe('MainNav', () => {
  it('should render without errors', () => {
    render(<MainNav />)
    const simpleButton = screen.getByText('Quem Somos')
    const filledButton = screen.getByText('Agendar Consulta')

    expect(simpleButton).toBeInTheDocument()
    expect(filledButton).toBeInTheDocument()
  })

  it('should have correct link hrefs', () => {
    render(<MainNav />)
    const simpleButton = screen.getByText('Quem Somos')
    const filledButton = screen.getByText('Agendar Consulta')

    expect(simpleButton).toHaveAttribute('href', '/aboutUs')
    expect(filledButton).toHaveAttribute('href', '/schedule')
  })
})
