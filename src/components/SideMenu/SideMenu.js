import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EmailIcon from '@mui/icons-material/Email';

const SideMenu = () => {

  const displayIcon = index => {

    switch (index) {
      case 'Home':
        return <HomeIcon />
        break
      case 'Project':
        return <CodeIcon />
        break
      case 'Toolbelt':
        return <ArchitectureIcon />
        break
      case 'Contact':
        return <EmailIcon />
        break
      default:
        return <></>
        break
    }

  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List>
        {['Home', 'Project', 'Toolbelt', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {displayIcon(index)}
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={true}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideMenu
