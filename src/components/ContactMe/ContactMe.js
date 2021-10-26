import { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import InsertComment from '@mui/icons-material/InsertComment';
import './ContactMe.css'

const ContactMe = () => {
  const [ click, toggleClick ] = useState(false)
  const [ connectInfo, setConnectInfo ] = useState({
    email: '',
    message: ''
  })

  const handleClick = event => {
    event.preventDefault()
    toggleClick(!click)
  }

  const handleInputChange = ({ target: { name, value } }) => setConnectInfo({ ...connectInfo, [name]: value})

  const handleSubmit = event => {
    event.preventDefault()



  }

  const displayInputArea = () => {

    return(
      <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1}
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
              name="email"
              value={connectInfo.email}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              name="message"
              onChange={handleInputChange}
              multiline
              rows={4}
            />
            <button className="submitBtn">Submit</button>
          </div>
        </Box>
      </>
    )

  }

  return(
    <>
      <Box sx={{ position: 'fixed', width: '100%', bottom: 0, float: 'right', padding: '0px 10px 10px 0px', transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Fab className="contactBtnColor" aria-label="add" onClick={handleClick}>
          <InsertComment />
        </Fab>
      </Box>
      {click ? displayInputArea() : <></>}
    </>
  )
}

export default ContactMe
