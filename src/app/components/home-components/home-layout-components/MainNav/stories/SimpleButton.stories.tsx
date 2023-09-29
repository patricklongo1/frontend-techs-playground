// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { SimpleButton } from '../style'

export default {
  title: 'Components/Layout Components/MainNav/Micros/SimpleButton',
  component: SimpleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface ButtonProps {
  href: string
}

const Template: StoryFn<ButtonProps> = (args) => (
  <SimpleButton {...args}>Quem Somos</SimpleButton>
)

export const Default = Template.bind({})
Default.args = {
  href: '/aboutUs',
}
