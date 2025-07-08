import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface UserSearchProps{
    onSearch:(username: string) => void
}

const UserSearch:React.FC<UserSearchProps> = ({ onSearch }) => {

const [username,setUsername] = useState('')

const handleSubmit = () => {
    if(username.trim()){
        onSearch(username)
    }
}

  return (
    <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <TextField
          fullWidth
          label="Enter GitHub Username"
          variant='outlined'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{marginBottom: '10px'}}
        />
        <Button variant="outlined" color="primary" onClick={handleSubmit}>Search</Button>
    </div>
  )
}

export default UserSearch