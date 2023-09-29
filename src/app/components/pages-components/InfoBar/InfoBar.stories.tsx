// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import InfoBar from './index'

export default {
  title: 'Components/Pages Components/InfoBar',
  component: InfoBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface InfoBarProps {
  crumbs: { label: string; path?: string }[]
  title: string
  description: string
}

const Template: StoryFn<InfoBarProps> = (args) => <InfoBar {...args} />

export const Default = Template.bind({})
Default.args = {
  crumbs: [
    {
      label: 'Home',
      path: '/foo-url',
    },
    {
      label: 'FooBar',
    },
  ],
  title: 'Title Here',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
}
