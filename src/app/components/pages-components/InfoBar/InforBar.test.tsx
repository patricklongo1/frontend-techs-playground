import React from 'react'
import { render, screen } from '@testing-library/react'
import InfoBar from './index'

const sampleCrumbs = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const sampleTitle = 'Welcome to PokePetz'
const sampleDescription = 'Learn more about us and our services.'

describe('InfoBar', () => {
  it('should renders breadcrumbs correctly', () => {
    render(
      <InfoBar
        crumbs={sampleCrumbs}
        title={sampleTitle}
        description={sampleDescription}
      />,
    )

    const breadcrumbsContainer = screen.getByTestId('breadcrumbs-container')
    const breadcrumbs = screen.getAllByTestId('breadcrumb')
    const separator = screen.getAllByTestId('separator')

    expect(breadcrumbsContainer).toBeInTheDocument()
    expect(breadcrumbs).toHaveLength(sampleCrumbs.length)
    expect(separator).toHaveLength(sampleCrumbs.length - 1)
  })

  it('should renders title and description correctly', () => {
    render(
      <InfoBar
        crumbs={sampleCrumbs}
        title={sampleTitle}
        description={sampleDescription}
      />,
    )

    const title = screen.getByText(sampleTitle)
    const description = screen.getByText(sampleDescription)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
