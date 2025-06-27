import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Dashboard from '../src/pages/Dashboard'
import Users from '../src/pages/Users'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users`)
      .then((res) => {
        const data = res.data.users

        const usersWithRoles = data.map((user, i) => ({
          ...user,
          role: ['admin', 'manager', 'user'][i % 3],
        }))
        setUsers(usersWithRoles)
      })
      .catch((error) => {
        console.error('Gabim ne marrjen e perdoruesve')
      })
  }, [])

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
                <Dashboard mode={mode} users={users} />
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
