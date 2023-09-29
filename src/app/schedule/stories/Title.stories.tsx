// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { Title } from '../style'
import { ComponentChildProp } from '../../utils/ComponentChildProp'

export default {
  title: 'Pages/Schedule/Micros/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<ComponentChildProp> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Title example here',
}
