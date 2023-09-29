// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { SubTitle } from '../style'
import { ComponentChildProp } from '../../utils/ComponentChildProp'

export default {
  title: 'Pages/About Us/Micros/SubTitle',
  component: SubTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<ComponentChildProp> = (args) => <SubTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Subtitle example here',
}
