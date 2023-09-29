// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { IntegralSelect } from '../style'
import * as S from '../style'
import integralsOptions from '../../../../mocks/integrals.json'
import { ChangeEvent } from 'react'

export default {
  title: 'Pages/Schedule/Micros/IntegralSelect',
  component: IntegralSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface IntegralSelectProps {
  placeholder: string
}

const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  event.target.blur()
}

const Template: StoryFn<IntegralSelectProps> = (args) => (
  <S.IntegralSelect {...args} onChange={handleSelectChange}>
    <S.Option value="" disabled hidden>
      Selecione seu integrante
    </S.Option>
    {integralsOptions.results.length &&
      integralsOptions.results.map((option) => (
        <S.Option key={option.name} value={option.name}>
          {option.name}
        </S.Option>
      ))}
  </S.IntegralSelect>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Selecione seu integral',
}
