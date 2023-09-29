import styled from 'styled-components'

export const Container = styled.header`
  width: full;
  height: 5rem;
  padding: 0rem 3.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`
