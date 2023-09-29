// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { SubmitButton } from '../style'

export default {
  title: 'Pages/Schedule/Micros/SubmitButton',
  component: SubmitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface SubmitButtonProps {
  children: string
  disabled: boolean
}

const Template: StoryFn<SubmitButtonProps> = (args) => (
  <SubmitButton {...args} />
)

export const Enabled = Template.bind({})
Enabled.args = {
  children: 'Concluir Agendamento',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Concluir Agendamento',
  disabled: true,
}
