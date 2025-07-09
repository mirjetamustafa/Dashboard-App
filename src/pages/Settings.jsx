import {
  Box,
  Typography,
  Tab,
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  Grid,
  Divider,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { useState } from 'react'

const Settings = ({ mode, setMode }) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem('activeTab') || '1'
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
    localStorage.setItem('activeTab', newValue)
  }

  const label = { inputProps: { 'aria-label': 'Switch demo' } }

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
        sx={{ m: { md: 5 }, mt: { xs: 5 }, typography: 'body1' }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList onChange={handleChange} aria-label="settings tabs">
              <Tab
                icon={<PersonOutlineOutlinedIcon />}
                iconPosition="start"
                label={
                  <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    Profile
                  </Box>
                }
                value="1"
              />
              <Tab
                icon={<NotificationsNoneOutlinedIcon />}
                iconPosition="start"
                label={
                  <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    Notifications
                  </Box>
                }
                value="2"
              />
              <Tab
                icon={<ShieldOutlinedIcon />}
                iconPosition="start"
                label={
                  <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    Security
                  </Box>
                }
                value="3"
              />
              <Tab
                icon={<RemoveRedEyeOutlinedIcon />}
                iconPosition="start"
                label={
                  <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>
                    Appearance
                  </Box>
                }
                value="4"
              />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
              Profile Information
            </Typography>

            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                '& .MuiTextField-root': {
                  width: { md: '45%', xs: '80%' },
                  mb: { xs: 2, md: 0 },
                },
                mt: 5,
                ml: { md: 5 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                id="outlined-required"
                label="First Name"
                defaultValue="John"
                sx={{ mr: { md: 1 } }}
              />
              <TextField
                type="text"
                id="outlined-required"
                label="Last Name"
                defaultValue="Doe"
                sx={{ ml: { md: 3 } }}
              />
            </Box>

            <FormControl
              sx={{
                mt: { md: 3 },
                ml: { md: 5 },
                width: { md: '90%', xs: '80%' },
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
                mt: { md: 3, xs: 2 },
                ml: { md: 5 },
                width: { md: '90%', xs: '80%' },
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
                mt: { md: 3, xs: 2 },
                ml: { md: 5 },
                width: { md: '90%', xs: '80%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Your Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                defaultValue="Product manager with 5+ years of experience in SaaS companies."
                InputLabelProps={{ shrink: true }}
              />
            </FormControl>

            <Box sx={{ mt: 3, ml: { md: 4 } }}>
              <Button variant="contained" sx={{ m: 1 }}>
                Save changes
              </Button>
              <Button variant="outlined" sx={{ m: 1 }}>
                Cancel
              </Button>
            </Box>
          </TabPanel>

          <TabPanel value="2">
            <Typography variant="h6" sx={{ fontWeight: 'normal', mb: 3 }}>
              Notification Preferences
            </Typography>
            <Typography variant="p" sx={{}}>
              Email Notifications
            </Typography>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mt: 3, mb: 3 }}
            >
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="New account activity"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="New orders"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel control={<Switch />} label="System updates" />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Newsletter"
                />
              </Grid>
            </Grid>

            <Divider sx={{ mb: 3 }} />

            <Typography variant="p" sx={{}}>
              Push Notifications
            </Typography>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mt: 3, mb: 3 }}
            >
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="New messages"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel control={<Switch />} label="Order status" />
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Account alerts"
                />
              </Grid>
            </Grid>
            <Button variant="contained">Save preferences</Button>
          </TabPanel>

          <TabPanel value="3">
            <Typography variant="h6" sx={{ fontWeight: 'normal', mb: 3 }}>
              Security Settings
            </Typography>
            <Typography variant="p" sx={{}}>
              Change Password
            </Typography>

            <FormControl
              sx={{
                mt: 3,
                ml: { md: 5 },
                width: { md: '90%', xs: '80%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="email"
                id="outlined-required"
                label="Current Password"
              />
            </FormControl>

            <FormControl
              sx={{
                mt: 3,
                ml: { md: 5 },
                width: { md: '90%', xs: '80%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="email"
                id="outlined-required"
                label="New Password"
              />
            </FormControl>
            <FormControl
              sx={{
                mt: 3,
                ml: { md: 5 },
                width: { md: '90%', xs: '80%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="email"
                id="outlined-required"
                label="Confirm New Password"
              />
            </FormControl>
            <Button variant="contained" sx={{ mt: 4, ml: { md: 5 } }}>
              Update password
            </Button>

            <Divider sx={{ my: 5 }} />

            <Typography variant="p">Two-Factor Authentication</Typography>
            <Box sx={{ my: 2 }}>
              <FormControlLabel
                control={<Switch />}
                label="Enable two-factor authentication"
              />
            </Box>

            <Typography variant="body2" sx={{ color: 'gray' }}>
              Add an extra layer of security to your account by requiring a
              verification code in addition to your password.
            </Typography>
          </TabPanel>

          <TabPanel value="4">
            <Typography variant="h6" sx={{ fontWeight: 'normal', mb: 3 }}>
              Appearance Settings
            </Typography>
            <Typography variant="p">Theme</Typography>
            <Box sx={{ my: 3 }}>
              <FormControlLabel
                onClick={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
                control={<Switch />}
                label="Use dark theme"
              />
            </Box>
            <Divider sx={{ my: 5 }} />
            <Typography variant="p" sx={{ mb: 3 }}>
              Dashboard Layout
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mt: 3, mb: 3 }}
            >
              <Grid size={{ xs: 12, sm: 4 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Compact view"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Show analytics on homepage"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <FormControlLabel
                  control={<Switch />}
                  label="Show activity feed"
                />
              </Grid>
            </Grid>
            <Button variant="contained">Save preferences</Button>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  )
}

export default Settings
