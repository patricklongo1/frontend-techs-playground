import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index'

describe('Header', () => {
  it('should render without errors', () => {
    render(<Header>Test Content</Header>)
    const headerElement = screen.getByTestId('header-container')
    expect(headerElement).toBeInTheDocument()
  })

  it('should display the children content', () => {
    render(<Header>Test Content</Header>)
    const headerElement = screen.getByTestId('header-container')
    expect(headerElement).toHaveTextContent('Test Content')
  })
})
