import { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import TextField from '@mui/material/TextField';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InsertComment from '@mui/icons-material/InsertComment';
import './ContactMe.css'

const actions = [
  {
    icon: <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />,
    name: 'Email'
  },
  {
    icon: <TextField />, name: 'Email'
  }
]

const ContactMe = () => {
  const [value, setValue] = useState('Controlled')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    console.log('click')
  }

  return(
    <>
      <Box sx={{ position: 'sticky', bottom: 0, float: 'right', padding: '0px 10px 10px 0px', transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Fab className="contactBtnColor" aria-label="add" onClick={handleClick}>
          <InsertComment />
        </Fab>
      </Box>
    </>
  )
}

export default ContactMe
