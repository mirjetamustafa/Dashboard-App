// import { CheckBox } from '@mui/icons-material'
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Checkbox,
} from '@mui/material'
import { useState } from 'react'

const TableUsers = ({ users, mode, searchUser }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selected, setSelected] = useState([])

  const handleChangePage = (event, newPage) => setPage(newPage)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const getStatusChip = (status) => (
    <Chip
      label={status}
      variant="outlined"
      color={status === 'Active' ? 'success' : 'default'}
      icon={status === 'Active' ? <span>✓</span> : <span>✕</span>}
      sx={{ fontSize: '0.75rem' }}
    />
  )

  const selectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((user) => user.id)
      setSelected(newSelected)
    } else {
      setSelected([])
    }
  }

  const handleClick = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    )
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLocaleLowerCase()
    return (
      fullName.includes(searchUser.toLocaleLowerCase()) ||
      user.email.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase()) ||
      user.role.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase()) ||
      user.status.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase())
    )
  })

  return (
    <Paper sx={{ width: '100%', overflowX: 'auto', mt: 5 }}>
      <TableContainer>
        <Table>
          <TableHead
            sx={{ backgroundColor: mode === 'light' ? '#f5f5f5' : '#424242' }}
          >
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < users.length
                  }
                  checked={users.length > 0 && selected.length === users.length}
                  onChange={selectAllClick}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Login</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell padding="checkbox" sx={{}}>
                    <Checkbox
                      checked={selected.includes(user.id)}
                      onChange={() => handleClick(user.id)}
                    />
                  </TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{getStatusChip(user.status)}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableUsers
