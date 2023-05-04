import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Addemployee = () => {
  const {register,handleSubmit}=useForm() ;
  const getVal=(val)=>{
    alert('Form submitted');
axios.post('https://reqres.in/api/users',val).then((res)=>{
 alert( `the data is posted with id ${res.data.id}`)
})
   }
  return (
    <div>
      <Stack
      component="form"
      sx={{
        marginTop:'15%',
      marginLeft:'45%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="outlined"
        
      />
      <TextField
      name='emplocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Employee Location"
        variant="outlined"
      />
      <TextField
      name='empdesignation'
      {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Designation"
        variant="outlined"
        
      />
      <Button onClick={handleSubmit(getVal)}variant='contained'>Submit</Button>
    </Stack>
    </div>
  )
}

export default Addemployee
