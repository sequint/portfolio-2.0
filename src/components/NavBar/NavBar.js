import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../images/portfolio-logo.png'
import './NavBar.css'

const NavBar = () => {
 return(
   <>
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar className="navBgColor">
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
           >
             <MenuIcon />
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
   </>
 ) 
}

export default NavBar
