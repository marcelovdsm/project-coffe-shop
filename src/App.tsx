import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
