import {
  Box,
  Icon,
  Paper,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from '@mui/material'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import { useState } from 'react'
import SalesOverview from '../components/SalesOverview'
import UserEngagement from '../components/UserEngagement'
import MonthlyTrends from '../components/MonthlyTrends'

const data = [
  { month: 'Jan', revenue: 2000, profit: 1000 },
  { month: 'Feb', revenue: 3000, profit: 1500 },
  { month: 'Mar', revenue: 4000, profit: 2000 },
  { month: 'Apr', revenue: 2500, profit: 1800 },
  { month: 'May', revenue: 4500, profit: 2300 },
  { month: 'Jun', revenue: 5000, profit: 2500 },
]

const monthlyTrends = [
  { month: 'Jan', sales: 4000, orders: 2400 },
  { month: 'Feb', sales: 3000, orders: 1398 },
  { month: 'Mar', sales: 2000, orders: 9800 },
  { month: 'Apr', sales: 2780, orders: 3908 },
  { month: 'May', sales: 1890, orders: 4800 },
  { month: 'Jun', sales: 2390, orders: 3800 },
]

const Analytics = ({ users }) => {
  const [alignment, setAlignment] = useState('day')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Analytics
      </Typography>
      <Typography variant="p" color="gray">
        Detailed metrics and performance analytics
      </Typography>

      <Paper
        bgcolor={'background.default'}
        color={'text.primary'}
        elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 9,
          p: '15px',
          mx: '10px',
          borderRadius: '5px',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Icon sx={{ mr: 1.5, mt: 1 }}>
            <TrendingUpOutlinedIcon />
          </Icon>
          <Typography variant="h6" sx={{ fontWeight: 'regular' }}>
            Performance Overview
          </Typography>
        </Box>

        <ToggleButtonGroup
          onChange={handleChange}
          value={alignment}
          exclusive
          aria-label="Platform"
          sx={{ textTransform: 'uppercase' }}
        >
          <ToggleButton value="day">Day</ToggleButton>
          <ToggleButton value="week">week</ToggleButton>
          <ToggleButton value="month">Month</ToggleButton>
          <ToggleButton value="year">Year</ToggleButton>
        </ToggleButtonGroup>
      </Paper>

      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
        sx={{
          p: 2,
          mx: 1,
          my: 4,
          border: 1,
          borderColor: '#e0e0e0',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'regular' }}>
          Revenue Analytics
        </Typography>

        <SalesOverview data={data} />
      </Box>

      <Stack
        justifyContent="space-between"
        sx={{ flexDirection: { xs: 'column', md: 'row' }, mt: 4, gap: 1 }}
      >
        <Box
          flex={4}
          bgcolor={'background.default'}
          color={'text.primary'}
          sx={{
            p: 2,
            m: 1,
            border: 1,
            borderColor: '#e0e0e0',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'regular' }}>
            User Engagement
          </Typography>
          <UserEngagement users={users} />
        </Box>
        <Box
          flex={4}
          bgcolor={'background.default'}
          color={'text.primary'}
          sx={{
            p: 2,
            m: 1,
            border: 1,
            borderColor: '#e0e0e0',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'regular' }}>
            Monthly Trends
          </Typography>
          <MonthlyTrends monthlyTrends={monthlyTrends} />
        </Box>
      </Stack>
    </Box>
  )
}

export default Analytics
