import { Box, Button, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import Users from './Users'
import Analytics from './Analytics'
import Settings from './Settings'
import Feeds from './Feeds'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { connect } from 'react-redux'

const data = [
  { month: 'Jan', revenue: 4000, profit: 2400 },
  { month: 'Feb', revenue: 3000, profit: 1398 },
  { month: 'Mar', revenue: 2000, profit: 9800 },
  { month: 'Apr', revenue: 2780, profit: 3908 },
  { month: 'May', revenue: 1890, profit: 4800 },
  { month: 'Jun', revenue: 2390, profit: 3800 },
  { month: 'Jul', revenue: 3490, profit: 4300 },
  { month: 'Aug', revenue: 4000, profit: 2400 },
  { month: 'Sep', revenue: 3000, profit: 1398 },
  { month: 'Oct', revenue: 2000, profit: 9800 },
  { month: 'Nov', revenue: 2780, profit: 3908 },
  { month: 'Dec', revenue: 3890, profit: 4800 },
]

const Dashboard = (props) => {
  const { mode, users, setMode, user } = props
  const [section, setSection] = useState('dashboard')

  const renderContent = () => {
    if (section === 'users') return <Users mode={mode} users={users} />
    if (section === 'analytics') return <Analytics users={users} />
    if (section === 'settings')
      return <Settings mode={mode} setMode={setMode} />
    return <Feeds mode={mode} users={users} data={data} />
  }

  return (
    <Box sx={{ pt: 9 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            display: { xs: 'none', md: 'block', bgcolor: 'background.default' },
          }}
        >
          <Sidebar onSelect={setSection} activeSection={section} />
        </Box>

        <Box
          flex={4}
          p={2}
          sx={{ bgcolor: mode === 'light' ? '#fafafa' : 'black' }}
        >
          <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'center' }}>
            <Button
              onClick={() => setSection('dashboard')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'gray',
                gap: 0.5,
                fontWeight: 500,
                fontSize: '1rem',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <HomeOutlinedIcon fontSize="small" />
              Dashboard
            </Button>
            {section !== 'dashboard' && (
              <>
                <Box
                  component={'span'}
                  sx={{ color: 'gray', fontSize: '1rem' }}
                >
                  /
                </Box>
                <Box component="span" sx={{ textTransform: 'capitalize' }}>
                  {section}
                </Box>
              </>
            )}
          </Box>
          <Box sx={{ ml: 1 }}>{renderContent()}</Box>
        </Box>
      </Stack>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
