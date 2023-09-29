// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { Container } from '../style'

export default {
  title: 'Components/Layout Components/AnimatedLogo/Micros/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface ButtonProps {
  isExpanded: boolean
  href: string
}

const Template: StoryFn<ButtonProps> = (args) => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  isExpanded: true,
  href: '/',
}
