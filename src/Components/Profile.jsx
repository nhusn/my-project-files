import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Collapse, Form } from 'react-bootstrap'

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div style={{width:'95%'}} className='border rounded shadow p-3'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3>My Profile</h3>
            <i onClick={() => setOpen(!open)} class="fa-solid fa-check text-success"></i>
        </div>
       <Collapse in={open}>
            <div className='text-center mt-5'>
                <label className='text-center'>
                    <input style={{display:"none"}} type="file"/>
                    <img width={'70%'} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="upload picture" className='rounded-circle' />
                </label>
            </div>
            <div style={{width:"100%"}} className='mt-5 d-flex justify-content-center align-items-center flex-column'>
                <TextField className='w-75' id="standard-basic" label="user name" variant="standard" />  
                <TextField className='w-75 mt-3' id="standard-basic" label="Github" variant="standard" />
                <TextField className='w-75 mt-3' id="standard-basic" label="LinkedIn" variant="standard" />
            </div>  
            <div className='mt-5 text-center'>
                <button className='btn btn-warning w-75'>Update</button>
            </div>
       </Collapse>
    </div>
  )
}

export default Profile