import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Dashboard from '../src/pages/Dashboard'
import Users from '../src/pages/Users'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Box } from '@mui/material'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar mode={mode} setMode={setMode} />
                <Dashboard mode={mode} />
              </>
            }
          />

          <Route
            path="/user"
            element={
              <>
                <Navbar mode={mode} setMode={setMode} />
                <Users />
              </>
            }
          />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
