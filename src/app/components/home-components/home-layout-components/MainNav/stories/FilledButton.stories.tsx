// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { FilledButton } from '../style'

export default {
  title: 'Components/Layout Components/MainNav/Micros/FilledButton',
  component: FilledButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface ButtonProps {
  href: string
}

const Template: StoryFn<ButtonProps> = (args) => (
  <FilledButton {...args}>Agendar</FilledButton>
)

export const Default = Template.bind({})
Default.args = {
  href: '/schedule',
}
