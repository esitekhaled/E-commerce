import React, { useState, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { jwtDecode } from 'jwt-decode';
import AuthContext from "../auth.js"; // Update this path

const Log = (props) => {
  const { setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleLogin = async () => {
    
       await axios.get("http://localhost:3000/api/user/signin", formData)
       .then((res=>{
        const token = res.data;
      const decodedToken = jwtDecode(token);
      setToken(decodedToken);
      props.handleNavItemClick('home');
       })).catch((err)=>{console.log(err)})
      
   
  };

  return (
    <div>
      <div style={{ width: "100%", marginTop: 100, display: "flex" }}>
        <div style={{ width: "50%", height: 700, marginLeft: 20 }}>
          <img
            style={{ width: "100%", height: 600 }}
            src="https://static.independent.co.uk/2023/07/21/12/nothing%20phone%20.jpg"
            alt=""
          />
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
            marginLeft: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h3" gutterBottom>
            Log in to Exclusive
          </Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleLogin}>
            LOG-IN
          </Button>
          <Typography variant="body2" mt={2}>
            Forget your password! <a href="/login">Login here</a>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Log;
