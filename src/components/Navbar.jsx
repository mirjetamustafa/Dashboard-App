import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Tooltip from '@mui/material/Tooltip'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { styled } from '@mui/material/styles'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#1f1f1f'
      : theme.palette.background.default,
  color: theme.palette.text.primary,

  display: 'flex',
  justifyContent: 'space-between',
}))

const StyledMenuItem = styled(MenuItem)({
  display: 'flex',
  flexDirection: 'column',
})

const Navbar = ({ mode, setMode }) => {
  const [profil, setProfil] = React.useState(null)
  const open = Boolean(profil)
  const profilClick = (event) => {
    setProfil(event.currentTarget)
  }
  const profilClose = () => {
    setProfil(null)
  }

  const [notification, setNotification] = React.useState(null)
  const not = Boolean(notification)
  const notificationClick = (event) => {
    setNotification(event.currentTarget)
  }
  const notificationClose = () => {
    setNotification(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={0}>
        <StyledToolbar sx={{ boxShadow: 1 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
            color={'text.primary'}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'flex' },
              justifyContent: 'flex-end',
              flexGrow: 1,
              gap: 1,
            }}
          >
            <Tooltip title="">
              <IconButton
                onClick={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
                sx={{ p: 1 }}
              >
                {mode === 'light' ? (
                  <DarkModeOutlinedIcon sx={{ color: 'black' }} />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Tooltip>

            <Tooltip>
              <IconButton
                sx={{ p: 1 }}
                id="notifitacion-button"
                aria-controls={not ? 'notifitacion-button' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={notificationClick}
              >
                <Badge badgeContent={2} color="error">
                  {mode === 'light' ? (
                    <NotificationsNoneIcon sx={{ color: 'black' }} />
                  ) : (
                    <NotificationsNoneIcon sx={{ color: 'white' }} />
                  )}
                </Badge>
              </IconButton>

              <Menu
                id="notifitacion-menu"
                anchorEl={notification}
                open={not}
                onClose={notificationClose}
                slotProps={{
                  list: {
                    'aria-labelledby': 'notifitacion-button',
                  },
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                sx={{ my: 1.5, ml: 5 }}
              >
                <StyledMenuItem onClick={notificationClose}>
                  <span
                    style={{
                      fontSize: '1rem',
                      color: 'balck',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    New user registered
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'gray',
                      alignSelf: 'flex-start',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    5 minutes ago
                  </span>
                </StyledMenuItem>
                <StyledMenuItem onClick={notificationClose}>
                  <span
                    style={{
                      fontSize: '1rem',
                      color: 'balck',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    New order recived
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'gray',
                      alignSelf: 'flex-start',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    5 minutes ago
                  </span>
                </StyledMenuItem>
                <StyledMenuItem onClick={notificationClose}>
                  <span
                    style={{
                      fontSize: '1rem',
                      color: 'balck',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    Server rebooted
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'gray',
                      alignSelf: 'flex-start',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    5 minutes ago
                  </span>
                </StyledMenuItem>
              </Menu>
            </Tooltip>

            <Tooltip>
              <IconButton
                sx={{ p: 0 }}
                id="notification-button"
                aria-controls={open ? 'notification-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={profilClick}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>

              <Menu
                id="notification-menu"
                anchorEl={profil}
                open={open}
                onClose={profilClose}
                slotProps={{
                  list: {
                    'aria-labelledby': 'notification-button',
                  },
                }}
                sx={{ my: 1.5, mx: 0 }}
              >
                <MenuItem onClick={profilClose}>Profile</MenuItem>
                <MenuItem onClick={profilClose}>Account</MenuItem>
                <MenuItem onClick={profilClose}>Logout</MenuItem>
              </Menu>
            </Tooltip>
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
