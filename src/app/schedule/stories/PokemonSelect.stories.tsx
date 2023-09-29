// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { PokemonSelect } from '../style'
import * as S from '../style'
import pokemonsOptions from '../../../../mocks/pokemons.json'
import { ChangeEvent } from 'react'

export default {
  title: 'Pages/Schedule/Micros/PokemonSelect',
  component: PokemonSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface PokemonSelectProps {
  placeholder: string
}

const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  event.target.blur()
}

const Template: StoryFn<PokemonSelectProps> = (args) => (
  <S.PokemonSelect {...args} onChange={handleSelectChange}>
    <S.Option value="" disabled hidden>
      Selecione seu Pokémon
    </S.Option>
    {pokemonsOptions.results.length &&
      pokemonsOptions.results.map((option) => (
        <S.Option key={option.name} value={option.name}>
          {option.name}
        </S.Option>
      ))}
  </S.PokemonSelect>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Selecione seu pokemon',
}
