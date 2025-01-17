import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from '@/components/ui/provider'
import { ThemeProvider } from 'styled-components'
import { theme } from './system/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
