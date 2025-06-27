import { CardMembership } from '@mui/icons-material'
import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'

const RecentActivity = ({ mode }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'regular', ml: 2 }}>
        Recent Activity
      </Typography>

      <Card sx={{ mt: 3, boxShadow: 0 }}>
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PersonOutlineOutlinedIcon
                sx={{
                  bgcolor: mode === 'light' ? '#e3f2fd' : '#263238',
                  color: '#1e88e5',
                  borderRadius: '20px',
                  p: 0.5,
                }}
              />

              <Typography
                variant="h6"
                sx={{ fontWeight: 'regular', fontSize: '14px' }}
              >
                New user registered
              </Typography>
            </Box>
            <Typography variant="p" sx={{ color: 'gray', ml: 6 }}>
              Jane Smith created an account
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'gray', ml: 6, fontSize: '12px', mt: 1 }}
            >
              5 min ago
            </Typography>
          </Box>
          <Divider variant="middle" />

          <Box sx={{ mb: 2, mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ShoppingCartOutlinedIcon
                sx={{
                  bgcolor: mode === 'light' ? '#e8f5e9' : '#263238',

                  color: '#4caf50',
                  borderRadius: '20px',
                  p: 0.5,
                }}
              />

              <Typography
                variant="h6"
                sx={{ fontWeight: 'regular', fontSize: '14px' }}
              >
                New order received
              </Typography>
            </Box>
            <Typography variant="p" sx={{ color: 'gray', ml: 6 }}>
              Order #12345 - $230.00
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'gray', ml: 6, fontSize: '12px', mt: 1 }}
            >
              1 hour ago
            </Typography>
          </Box>

          <Divider variant="middle" />

          <Box sx={{ mb: 2, mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ErrorOutlineOutlinedIcon
                sx={{
                  bgcolor: mode === 'light' ? '#fff3e0' : '#263238',

                  color: '#fb8c00',
                  borderRadius: '20px',
                  p: 0.5,
                }}
              />

              <Typography
                variant="h6"
                sx={{ fontWeight: 'regular', fontSize: '14px' }}
              >
                Server load high
              </Typography>
            </Box>
            <Typography variant="p" sx={{ color: 'gray', ml: 6 }}>
              Database server reaching capacity
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'gray', ml: 6, fontSize: '12px', mt: 1 }}
            >
              2 hours ago
            </Typography>
          </Box>

          <Divider variant="middle" />

          <Box sx={{ mb: 2, mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <DescriptionOutlinedIcon
                sx={{
                  bgcolor: mode === 'light' ? '#e3f2fd' : '#263238',

                  color: '#1e88e5',
                  borderRadius: '20px',
                  p: 0.5,
                }}
              />

              <Typography
                variant="h6"
                sx={{ fontWeight: 'regular', fontSize: '14px' }}
              >
                Report generated
              </Typography>
            </Box>
            <Typography variant="p" sx={{ color: 'gray', ml: 6 }}>
              Monthly sales report was created
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'gray', ml: 6, fontSize: '12px', mt: 1 }}
            >
              5 hours ago
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default RecentActivity
