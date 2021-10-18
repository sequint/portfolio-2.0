import { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import InsertComment from '@mui/icons-material/InsertComment';
import './ContactMe.css'

const ContactMe = () => {
  const [ click, toggleClick ] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    toggleClick(!click)
  }

  const displayInputArea = () => {

    return(
      <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1},
          }}
          noValidate
          autoComplete="off"
          className="messageInput"
        >
          <h3 className="contactMeTitle">Let's Connect!</h3>
          <div>
            <TextField
              id="outlined-email"
              label="Email"
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
          </div>
        </Box>
      </>
    )

  }

  return(
    <>
      <Box sx={{ position: 'sticky', bottom: 0, float: 'right', padding: '0px 10px 10px 0px', transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Fab className="contactBtnColor" aria-label="add" onClick={handleClick}>
          <InsertComment />
        </Fab>
      </Box>
      {click ? displayInputArea() : <></>}
    </>
  )
}

export default ContactMe
