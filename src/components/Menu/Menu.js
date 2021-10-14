import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EmailIcon from '@mui/icons-material/Email';
import './Menu.css'

const Menu = () => {
  return (
    <Box className="menuContainer" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className="menuItem"/>
              </ListItemIcon>
              <Link className="menuItem" to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CodeIcon className="menuItem"/>
              </ListItemIcon>
              <Link className="menuItem" to="/">
                <ListItemText primary="Projects" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArchitectureIcon className="menuItem" />
              </ListItemIcon>
              <Link className="menuItem" to="/">
                <ListItemText primary="Toolbelt" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon className="menuItem"/>
              </ListItemIcon>
              <Link className="menuItem" to="/">
                <ListItemText primary="Contact" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Menu
