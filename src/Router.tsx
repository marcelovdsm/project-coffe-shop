import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Cart } from './Pages/Cart'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export const Router = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </ThemeProvider>
  )
}
