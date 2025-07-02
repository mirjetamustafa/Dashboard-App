import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

const Users = ({ mode, users }) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Users
      </Typography>
      <Typography variant="p" color="gray">
        Manage your user accounts and permissions
      </Typography>

      <Paper
        bgcolor={'background.default'}
        color={'text.primary'}
        elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 9,
          p: '20px',
          borderRadius: '5px',
        }}
      >
        <TextField
          placeholder="Search users..."
          variant="outlined"
          size="small"
          sx={{
            borderRadius: '20px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
            },
            width: '30%',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon sx={{ color: 'gray' }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          sx={{ textTransform: 'uppercase' }}
        >
          Add user
        </Button>
      </Paper>
    </Box>
  )
}

export default Users
