import {
  Box,
  Typography,
  Tab,
  FormControl,
  TextField,
  TextareaAutosize,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'

const Settings = () => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem('activeTab') || '1'
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
    localStorage.setItem('activeTab', newValue)
  }

  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Settings
      </Typography>
      <Typography variant="p" color="gray">
        Manage your account settings and preferences
      </Typography>

      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
        sx={{ m: 5, typography: 'body1' }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
              <Tab label="Item Four" value="4" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
              Profile Information
            </Typography>

            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { width: '45%' }, mt: 5, ml: 5 }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                id="outlined-required"
                label="First Name"
                defaultValue="John"
                sx={{ mr: 1 }}
              />
              <TextField
                type="text"
                id="outlined-required"
                label="Last Name"
                defaultValue="Doe"
                sx={{ ml: 3 }}
              />
            </Box>

            <FormControl
              sx={{
                mt: 3,
                ml: 5,
                width: '90%',
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="email"
                id="outlined-required"
                label="Email Address"
                defaultValue="john.doe@example.com"
              />
            </FormControl>

            <FormControl
              sx={{
                mt: 3,
                ml: 5,
                width: '90%',
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                id="outlined-required"
                label="Job Title"
                defaultValue="Product Manager"
              />
            </FormControl>

            <FormControl
              sx={{
                mt: 3,
                ml: 5,
                width: '90%',
              }}
              noValidate
              autoComplete="off"
            >
              <TextareaAutosize
                aria-label="minimum height"
                minRows={7}
                label="Bio"
                defaultValue="Product manager with 5+ years of experience in SaaS companies."
                style={{}}
              />
            </FormControl>
          </TabPanel>
          <TabPanel value="2">ITem two</TabPanel>
          <TabPanel value="3">ITem three</TabPanel>
          <TabPanel value="4">ITem four</TabPanel>
        </TabContext>
      </Box>
    </Box>
  )
}

export default Settings
