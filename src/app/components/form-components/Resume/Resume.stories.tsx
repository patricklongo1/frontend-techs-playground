// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import Resume from './index'

export default {
  title: 'Components/Form Components/Resume',
  component: Resume,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface ResumeProps {
  teamTotal: number
  tax: number
}

const Template: StoryFn<ResumeProps> = (args) => <Resume {...args} />

export const Default = Template.bind({})
Default.args = {
  teamTotal: 5,
  tax: 3.5,
}
