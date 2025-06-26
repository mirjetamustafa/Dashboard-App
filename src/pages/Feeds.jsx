import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SalesOverview from '../components/SalesOverview'

const Feeds = ({ mode }) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Dashboard
      </Typography>
      <Typography variant="p" color="gray">
        Welcome back! Here's an overview of your business
      </Typography>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid size={{ xs: 6, md: 3 }} sx={{ p: 1 }}>
          <Card
            sx={{
              p: 1,
              boxShadow: 1,
              borderRadius: '7px',
              border: 1,
              borderColor: '#e0e0e0',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  Total Users
                </Typography>
                <PeopleOutlineIcon
                  sx={{
                    bgcolor: mode === 'light' ? '#e3f2fd' : '#263238',

                    color: '#42a5f5',
                    borderRadius: '4px',
                    p: 0.5,
                  }}
                />
              </Box>
              <Typography variant="h6">12,361</Typography>
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#757575',
                }}
              >
                <Typography component="span" sx={{ color: '#4caf50', mr: 1 }}>
                  +12%
                </Typography>{' '}
                vs last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }} sx={{ p: 1 }}>
          <Card
            sx={{
              p: 1,
              boxShadow: 1,
              borderRadius: '7px',
              border: 1,
              borderColor: '#e0e0e0',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  Revenue
                </Typography>
                <AttachMoneyIcon
                  sx={{
                    bgcolor: mode === 'light' ? '#e8f5e9' : '#263238',

                    color: '#66bb6a',
                    borderRadius: '4px',
                    p: 0.5,
                  }}
                />
              </Box>
              <Typography variant="h6">24,780</Typography>
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#757575',
                }}
              >
                <Typography component="span" sx={{ color: '#4caf50', mr: 1 }}>
                  +8%
                </Typography>{' '}
                vs last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }} sx={{ p: 1 }}>
          <Card
            sx={{
              p: 1,
              boxShadow: 1,
              borderRadius: '7px',
              border: 1,
              borderColor: '#e0e0e0',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  Orders
                </Typography>
                <ShoppingCartOutlinedIcon
                  sx={{
                    bgcolor: mode === 'light' ? '#fff3e0' : '#263238',

                    color: '#ffa726',
                    borderRadius: '4px',
                    p: 0.5,
                  }}
                />
              </Box>
              <Typography variant="h6">1,482</Typography>
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#757575',
                }}
              >
                <Typography component="span" sx={{ color: '#f44336', mr: 1 }}>
                  +3%
                </Typography>{' '}
                vs last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }} sx={{ p: 1 }}>
          <Card
            sx={{
              p: 1,
              boxShadow: 1,
              borderRadius: '7px',
              border: 1,
              borderColor: '#e0e0e0',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  Conversion Rate
                </Typography>
                <PeopleOutlineIcon
                  sx={{
                    bgcolor: mode === 'light' ? '#f3e5f5' : '#263238',

                    color: '#ab47bc',
                    borderRadius: '4px',
                    p: 0.5,
                  }}
                />
              </Box>
              <Typography variant="h6">3.42%</Typography>
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#757575',
                }}
              >
                <Typography component="span" sx={{ color: '#4caf50', mr: 1 }}>
                  +5%
                </Typography>{' '}
                vs last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Stack
        justifyContent="space-between"
        sx={{ flexDirection: { xs: 'column', md: 'row' }, mt: 9 }}
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
            Sales Overview
          </Typography>

          <SalesOverview />
        </Box>

        <Box flex={2} sx={{ p: 2, m: 1 }} bgcolor={'red'}>
          <Typography>HEllo</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default Feeds
