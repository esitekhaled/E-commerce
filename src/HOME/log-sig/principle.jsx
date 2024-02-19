import React, { useState, useContext } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import AuthContext from "../auth.js"; 
const LogSign = (props) => {
  const { setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username:'',
    email: "",
    password: "",
    role:"client",
    toke:"try"
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleRegister = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/signup", formData);
     
      setToken(response.data);
      props.handleNavItemClick('home');
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div>
      <div style={{ width: '100%', marginTop: 100, display: 'flex' }}>
        <div style={{ width: '50%', height: 700, marginLeft: 20 }}>
          <img style={{ width: '100%', height: 600 }} src="https://static.independent.co.uk/2023/07/21/12/nothing%20phone%20.jpg" alt="" />
        </div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '45ch' }, marginLeft: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h3" gutterBottom>
            CREATE ACCOUNT
          </Typography>
          <TextField id="username" label="Username" value={formData.username} variant="outlined" onChange={handleChange} />
          <TextField id="email" value={formData.email} label="Email" type="email" variant="outlined" onChange={handleChange} />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            variant="outlined"
            onChange={handleChange}
          />
                    <TextField id="role" label="role" value={formData.role} variant="outlined" onChange={handleChange} />

     
          <Button variant="contained" onClick={()=>handleRegister(formData)}>
            Register
          </Button>
          <Button variant="contained" sx={{ mt: 2 }}>
            Sign Up with Google
          </Button>
          <Typography variant="body2" mt={2}>
            Already have an account? <a href="/login">Login here</a>
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default LogSign;
