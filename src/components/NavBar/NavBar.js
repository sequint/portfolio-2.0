import { useState } from 'react'
import Menu from '../Menu/Menu'
import SideMenu from '../SideMenu/SideMenu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../images/portfolio-logo.png'
import './NavBar.css'

const NavBar = () => {
  const [ menuToggle, setMenuToggle ] = useState(false)

  const handleMenuClick = _ => setMenuToggle(!menuToggle)

  const matches = useMediaQuery('(min-width:600px)')

  const displayMenu = _ => {

    if (!matches) {
      return <Menu />
    }
    else {
      return <SideMenu />
    }

  }

 return(
   <>
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="fixed">
         <Toolbar className="navBgColor">
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             onClick={handleMenuClick}
           >
             <MenuIcon  fontSize="large"/>
           </IconButton>
           <Typography className="navTitle" variant="h6" component="div" sx={{ flexGrow: .9 }}>
             <img 
              src={logo}
              alt="Site logo"
              className="logo"
             />
           </Typography>
         </Toolbar>
       </AppBar>
     </Box>
     {menuToggle ? displayMenu() : <></>}
   </>
 ) 
}

export default NavBar
