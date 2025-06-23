import { Box } from '@mui/material'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <Box
        flex={1}
        p={2}
        sx={{
          display: { xs: 'none', sm: 'block', bgcolor: 'background.default' },
        }}
      >
        <Sidebar />
      </Box>

      <Box flex={4}>Dashboard</Box>
    </>
  )
}

export default Dashboard
