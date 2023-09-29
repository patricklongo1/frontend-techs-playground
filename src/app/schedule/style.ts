import styled, { css } from 'styled-components'
import { ComponentChildProp } from '../utils/ComponentChildProp'

export const Content = styled.main`
  margin: 0rem auto;
  max-width: 43.4667rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1<ComponentChildProp>`
  font-weight: 600;
  font-size: 1.6rem;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`

export const Form = styled.form`
  width: 34.375rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 23.5rem;
    flex-direction: column;
  }
`

export const DoubleInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5625rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const InputContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const PokemonListContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PokemonListContent = styled.div`
  margin-left: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

interface PokemonSelectProps {
  placeholder: string
}
export const PokemonSelect = styled.select<PokemonSelectProps>`
  width: 100%;
  align-self: flex-end;
  border: 0.0625rem solid #d5d5d5;
  border-radius: 0.5rem;
  padding: 0.6667rem;
  height: 2.8125rem;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%2025.656l-8.828-8.828-2.829%202.828%2011%2011%2011-11-2.829-2.828z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.7em top 20%,
    0 0;
  background-size:
    2em auto,
    100%;

  &:focus {
    background-position:
      right 0.7em bottom 20%,
      0 0;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%206.344l8.828%208.828%202.829-2.828-11-11-11%2011%202.829%202.828z%22%2F%3E%3C%2Fsvg%3E');
  }
`

export const PokemonAddButton = styled.button`
  border: 0.0625rem solid #1d1d1d;
  width: 17.5rem;
  height: 2.625rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: #444;
  border-radius: 1.875rem;
  margin: 1rem 0rem;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eee;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`

export const InputLabel = styled.label`
  font-weight: 700;
  font-size: 0.75rem;
  color: #444;
  margin-bottom: 0.5rem;
`
interface SimpleInputProps {
  placeholder: string
}
export const SimpleInput = styled.input<SimpleInputProps>`
  width: 85%;
  border: 0.0625rem solid #d5d5d5;
  border-radius: 0.5rem;
  padding: 0.6667rem;
  height: 1.5625rem;
`

interface SimpleSelectProps {
  placeholder: string
}
export const SimpleSelect = styled.select<SimpleSelectProps>`
  width: 94%;
  border: 0.0625rem solid #d5d5d5;
  border-radius: 0.5rem;
  padding: 0.6667rem;
  height: 2.8125rem;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%2025.656l-8.828-8.828-2.829%202.828%2011%2011%2011-11-2.829-2.828z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.7em top 20%,
    0 0;
  background-size:
    2em auto,
    100%;

  &:focus {
    background-position:
      right 0.7em bottom 20%,
      0 0;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%206.344l8.828%208.828%202.829-2.828-11-11-11%2011%202.829%202.828z%22%2F%3E%3C%2Fsvg%3E');
  }
`

export const Option = styled.option`
  padding: 0.6667rem;
  height: 2.8125rem;
`

export const SimpleSpan = styled.span`
  min-width: 4.375rem;
  font-weight: 700;
  font-size: 0.75rem;
  color: #444;
  margin-bottom: 0.25rem;
`

export const SimpleSmall = styled.small`
  font-weight: 500;
  font-size: 0.75rem;
  color: #747474;
`
interface SubmitButtonProps {
  children: string
  disabled: boolean
}
export const SubmitButton = styled.button<SubmitButtonProps>`
  width: 11.4375rem;
  height: 2.625rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: #fff;
  background-color: #e40f0f;
  border-radius: 1.875rem;
  align-self: flex-end;
  margin: 1rem 0rem;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c20808;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      background-color: #ddd;
      color: #000;
      &:hover {
        background-color: #ddd;
      }
    `}
`

export const ErrorMessage = styled.span`
  margin-top: 0.125rem;
  font-weight: 400;
  font-size: 0.75rem;
  color: #e40f0f;
`

export const Divider = styled.div`
  width: 34.375rem;
  height: 0.0625rem;
  background-color: #d5d5d5;
`
