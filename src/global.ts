import styled, { createGlobalStyle } from 'styled-components'

const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lato', sans-serif;

  }

  body {
    padding-bottom: 120px;
  }
`
export default StyleGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 1024px) {
    max-width: 85%;
  }
`

// :root {
//   --cor-principal: #a7727d;
//   --cor-secundaria: #f9f5e7;
// }
