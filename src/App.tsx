import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/theme/default'
import { GlobalStyles } from './style/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { CartProvider } from './contexts/CartContext'

export default function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
    <GlobalStyles />
  </ThemeProvider>
  )
}

