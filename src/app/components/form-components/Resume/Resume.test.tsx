import React from 'react'
import { render, screen } from '@testing-library/react'
import Resume from './index'

describe('Resume', () => {
  it('should renders the number of Pokémon to be attended', () => {
    const teamTotal = 5
    render(<Resume teamTotal={teamTotal} tax={3} />)

    const numberOfPokemons = screen.getByText(
      'Número de pokémons a serem atendidos:',
    )
    const numberOfPokemonsValue = screen.getByText(`${teamTotal}`)

    expect(numberOfPokemons).toBeInTheDocument()
    expect(numberOfPokemonsValue).toBeInTheDocument()
  })

  it('should renders the unit cost per Pokémon', () => {
    const teamTotal = 5
    render(<Resume teamTotal={teamTotal} tax={3} />)

    const unitCost = screen.getByText('Atendimento unitário por pokémon:')
    const unitCostValue = screen.getByText('R$ 70,00')

    expect(unitCost).toBeInTheDocument()
    expect(unitCostValue).toBeInTheDocument()
  })

  it('should renders the subtotal cost', () => {
    const teamTotal = 5
    render(<Resume teamTotal={teamTotal} tax={3} />)

    const subtotal = screen.getByText('Subtotal:')
    const subtotalValue = screen.getByText('R$ 350,00')

    expect(subtotal).toBeInTheDocument()
    expect(subtotalValue).toBeInTheDocument()
  })

  it('should renders the generational tax information', () => {
    const teamTotal = 5
    render(<Resume teamTotal={teamTotal} tax={3} />)

    const generationalTax = screen.getByText('Taxa geracional*:')
    const generationalTaxValue = screen.getByText('R$ 3,00')

    expect(generationalTax).toBeInTheDocument()
    expect(generationalTaxValue).toBeInTheDocument()
  })

  it('should renders the generational tax information', () => {
    const teamTotal = 5
    render(<Resume teamTotal={teamTotal} tax={3} />)

    const generationalTaxInfo = screen.getByText(
      '*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%',
    )

    expect(generationalTaxInfo).toBeInTheDocument()
  })
})
