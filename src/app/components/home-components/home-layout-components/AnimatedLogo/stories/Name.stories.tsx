// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { Name } from '../style'

export default {
  title: 'Components/Layout Components/AnimatedLogo/Micros/Name',
  component: Name,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface NameProps {
  children: string
}

const Template: StoryFn<NameProps> = (args) => <Name {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Techs Playground',
}
