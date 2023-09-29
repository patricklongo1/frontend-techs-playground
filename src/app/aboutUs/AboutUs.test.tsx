/* eslint-disable testing-library/no-render-in-lifecycle */
import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutUs from './page'

import QueryProvider from '../lib/queryProvider'
import aboutUs from '../../../mocks/aboutUs.json'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('AboutUs', () => {
  const worker = setupServer(
    rest.get('http://localhost:3000/api/about-us', async (req, res, ctx) => {
      return res(ctx.json(aboutUs))
    }),
  )

  beforeAll(() => {
    worker.listen()
  })

  beforeEach(() => {
    render(
      <QueryProvider>
        <AboutUs />
      </QueryProvider>,
    )
  })

  test('should renders the correct title', async () => {
    const titleElement = await screen.findByText('O Techs Playground')
    expect(titleElement).toBeInTheDocument()
  })

  test('should renders multiple subtitles', async () => {
    const subtitles = await screen.findAllByRole('heading', { level: 2 })
    expect(subtitles).toHaveLength(4)
  })
})
