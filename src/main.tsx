import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from '@/components/ui/provider'
import { ThemeProvider } from 'styled-components'
import { theme } from './system/theme.ts'
import SettingsProvider from './components/Settings/SettingsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <Provider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </SettingsProvider>
  </StrictMode>
)
