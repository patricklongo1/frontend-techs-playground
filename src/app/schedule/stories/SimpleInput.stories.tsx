// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { SimpleInput } from '../style'

export default {
  title: 'Pages/Schedule/Micros/SimpleInput',
  component: SimpleInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface SimpleInputProps {
  placeholder: string
}

const Template: StoryFn<SimpleInputProps> = (args) => <SimpleInput {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Digite seu nome',
}
