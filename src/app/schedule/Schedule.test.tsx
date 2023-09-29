/* eslint-disable testing-library/no-render-in-lifecycle */
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import QueryProvider from '../lib/queryProvider'
import Schedule from './page'

import dates from '../../../mocks/dates.json'
import times from '../../../mocks/times.json'
import integrals from '../../../mocks/integrals.json'
import regions from '../../../mocks/regions.json'
import cities from '../../../mocks/cities.json'
import city from '../../../mocks/city.json'

describe('Schedule', () => {
  const worker = setupServer(
    rest.get(
      'http://localhost:3000/api/scheduling/date',
      async (req, res, ctx) => {
        return res(ctx.json(dates))
      },
    ),

    rest.post(
      'http://localhost:3000/api/scheduling/time',
      async (req, res, ctx) => {
        return res(ctx.json(times))
      },
    ),

    rest.post(
      'http://localhost:3000/api/scheduling/create',
      async (req, res, ctx) => {
        return res(ctx.json(`Error or Success message`))
      },
    ),

    rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
      return res(ctx.json(integrals))
    }),

    rest.get('https://pokeapi.co/api/v2/region', async (req, res, ctx) => {
      return res(ctx.json(regions))
    }),

    rest.get('https://pokeapi.co/api/v2/location', async (req, res, ctx) => {
      return res(ctx.json(cities))
    }),

    rest.get('https://pokeapi.co/api/v2/location/1/', async (req, res, ctx) => {
      return res(ctx.json(city))
    }),
  )

  beforeAll(() => {
    worker.listen()
  })

  beforeEach(() => {
    render(
      <QueryProvider>
        <Schedule />
      </QueryProvider>,
    )
  })

  test('should render select with options', async () => {
    const selectElement = (await screen.findByTestId(
      'region',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectElement, 'kanto')
    expect(selectElement.value).toBe('kanto')
  })

  it('should submit the form with valid data', async () => {
    fireEvent.input(screen.getByLabelText('Nome'), {
      target: { value: 'John' },
    })
    fireEvent.input(screen.getByLabelText('Sobrenome'), {
      target: { value: 'Doe' },
    })

    const selectRegionElement = (await screen.findByTestId(
      'region',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectRegionElement, 'kanto')
    const selectCityElement = (await screen.findByTestId(
      'city',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectCityElement, 'Canalave City')

    fireEvent.click(screen.getByText('Add novo integrante ao atendimento +'))
    fireEvent.change(screen.getByPlaceholderText('Selecione seu integrante'), {
      target: { value: 'bulbasaur' },
    })

    const selectDateElement = (await screen.findByTestId(
      'date',
    )) as HTMLSelectElement
    const today = new Date().toLocaleDateString()
    await userEvent.selectOptions(selectDateElement, today)

    const selectTimeElement = (await screen.findByTestId(
      'time',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectTimeElement, '10:00:00')

    fireEvent.click(screen.getByText('Concluir Agendamento'))
    await waitFor(() => {
      expect(screen.getByText('Error or Success message')).toBeInTheDocument()
    })
  })
})
