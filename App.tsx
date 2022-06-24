import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './src/screens/Dashboard';
import theme from './src/global/styled/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

