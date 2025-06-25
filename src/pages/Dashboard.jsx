import { Box, Button, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import Users from './Users'
import Analytics from './Analytics'
import Settings from './Settings'
import Feeds from './Feeds'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [section, setSection] = useState('dashboard')

  const renderContent = () => {
    if (section === 'users') return <Users />
    if (section === 'analytics') return <Analytics />
    if (section === 'settings') return <Settings />
    return <Feeds />
  }

  return (
    <Box sx={{ mt: 9 }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            display: { xs: 'none', md: 'block', bgcolor: 'background.default' },
          }}
        >
          <Sidebar onSelect={setSection} activeSection={section} />
        </Box>

        <Box flex={4} p={2}>
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

export default Dashboard
