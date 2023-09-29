import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ScheduleStatus from './index'

const sampleProps = {
  status: 201,
  message: 'Appointment successfully scheduled',
  handleClose: jest.fn(),
}

describe('ScheduleStatus', () => {
  it('should renders success status correctly', () => {
    render(<ScheduleStatus {...sampleProps} />)

    const title = screen.getByText('Agendamento Realizado')
    const icon = screen.getByAltText('icon')
    const message = screen.getByText(sampleProps.message)
    const button = screen.getByText('Fazer Novo Agendamento')

    expect(title).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should renders error status correctly', () => {
    const errorProps = {
      ...sampleProps,
      status: 400,
    }

    render(<ScheduleStatus {...errorProps} />)

    const title = screen.getByText('Houve um problema no agendamento')
    const icon = screen.getByAltText('icon')
    const message = screen.getByText(sampleProps.message)
    const button = screen.getByText('Fazer Novo Agendamento')

    expect(title).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should calls handleClose function when button is clicked', () => {
    render(<ScheduleStatus {...sampleProps} />)

    const button = screen.getByText('Fazer Novo Agendamento')
    fireEvent.click(button)

    expect(sampleProps.handleClose).toHaveBeenCalledTimes(1)
  })
})
