import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TextField,
  Typography,
} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import TableUsers from '../components/TableUsers'
import { useState } from 'react'

const Users = ({ mode, users }) => {
  const [searchUser, setSearchUser] = useState('')
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
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          sx={{
            borderRadius: '5px',
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

      <TableUsers users={users} mode={mode} searchUser={searchUser} />
    </Box>
  )
}

export default Users
