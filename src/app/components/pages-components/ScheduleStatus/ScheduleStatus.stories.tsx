// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import ScheduleStatus from './index'

export default {
  title: 'Components/Pages Components/ScheduleStatus',
  component: ScheduleStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export interface ScheduleStatusProps {
  status: number
  message: string
  handleClose: () => void
}

const Template: StoryFn<ScheduleStatusProps> = (args) => (
  <ScheduleStatus {...args} />
)

export const Success = Template.bind({})
export const Error = Template.bind({})
Success.args = {
  status: 201,
  message:
    'Seu agendamento para dia xx/xx/xxxx, às xx:xx:xx, para x pokémons foi realizado com sucesso!',
  handleClose: () => {
    console.log('handleClose')
  },
}

Error.args = {
  status: 500,
  message: 'Houve um problema no agendamento',
  handleClose: () => {
    console.log('handleClose')
  },
}
