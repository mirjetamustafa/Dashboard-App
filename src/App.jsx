import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Dashboard from '../src/pages/Dashboard'
import Users from '../src/pages/Users'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from '../src/pages/Login'
import { getUserAuth } from './actions'
import { connect } from 'react-redux'

function App(props) {
  useEffect(() => {
    props.getUserAuth()
  }, [])

  const generateRandomDate = () => {
    const start = new Date(2023, 0, 1)
    const end = new Date(2023, 11, 31)
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
    return date.toLocaleDateString('en-GB')
  }

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users`)
      .then((res) => {
        const data = res.data.users

        const usersWithRoles = data.map((user, index) => ({
          ...user,
          role: ['admin', 'manager', 'user'][index % 3],
          status: index === 2 ? 'Inactive' : 'Active',
          lastLogin: generateRandomDate(),
        }))
        setUsers(usersWithRoles)
      })
      .catch((error) => {
        console.error('Gabim ne marrjen e perdoruesve', error)
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
                <Dashboard mode={mode} setMode={setMode} users={users} />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
