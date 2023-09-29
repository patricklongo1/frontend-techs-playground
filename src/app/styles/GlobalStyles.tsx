'use client'
import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: var(--font-inter);
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

const GlobalStyles = createGlobalStyle`
  ${styles}
`

export default GlobalStyles
