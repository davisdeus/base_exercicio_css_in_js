import { ThemeProvider } from 'styled-components'

import TemaLight from './themes/light'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global'

function App() {
  return (
    <ThemeProvider theme={TemaLight}>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
