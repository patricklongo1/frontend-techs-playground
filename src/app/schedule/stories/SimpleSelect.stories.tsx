// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { SimpleSelect } from '../style'
import * as S from '../style'
import regionsOptions from '../../../../mocks/regions.json'
import { ChangeEvent } from 'react'

export default {
  title: 'Pages/Schedule/Micros/SimpleSelect',
  component: SimpleSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface SimpleSelectProps {
  placeholder: string
}

const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  event.target.blur()
}

const Template: StoryFn<SimpleSelectProps> = (args) => (
  <S.SimpleSelect {...args} onChange={handleSelectChange}>
    <S.Option value="" disabled hidden>
      Selecione sua região
    </S.Option>
    {regionsOptions.results.length &&
      regionsOptions.results.map((option) => (
        <S.Option key={option.name} value={option.name}>
          {option.name}
        </S.Option>
      ))}
  </S.SimpleSelect>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Selecione sua região',
}
