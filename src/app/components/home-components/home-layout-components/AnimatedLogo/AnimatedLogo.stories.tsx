// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import AnimatedLogo from './index'

export default {
  title: 'Components/Layout Components/AnimatedLogo',
  component: AnimatedLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = () => <AnimatedLogo />

export const Default = Template.bind({})
