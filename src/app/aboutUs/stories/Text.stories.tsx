// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { Text } from '../style'
import { ComponentChildProp } from '../../utils/ComponentChildProp'

export default {
  title: 'Pages/About Us/Micros/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<ComponentChildProp> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Text example here',
}
