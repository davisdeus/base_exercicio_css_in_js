import { ThemeProvider } from 'styled-components'

import Tema from './themes/Theme'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import StyleGlobal, { Container } from './global'

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <StyleGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
