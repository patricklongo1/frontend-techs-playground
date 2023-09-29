// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import MainNav from './index'

export default {
  title: 'Components/Layout Components/MainNav',
  component: MainNav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = () => <MainNav />

export const Default = Template.bind({})
