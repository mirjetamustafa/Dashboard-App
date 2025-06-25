import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <HomeOutlinedIcon /> },
  { id: 'users', label: 'Users', icon: <PeopleOutlineIcon /> },
  { id: 'analytics', label: 'Analytics', icon: <InsertChartOutlinedIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsOutlinedIcon /> },
]

const Sidebar = ({ onSelect, activeSection }) => {
  return (
    <Box sx={{}} position="fixed">
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() => onSelect(item.id)}
            selected={activeSection === item.id}
            sx={{
              color: activeSection == item.id ? 'primary.main' : 'text.primary',
              '& .MuiListItemIcon-root': {
                color:
                  activeSection === item.id ? 'primary.main' : 'text.secondary',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default Sidebar
