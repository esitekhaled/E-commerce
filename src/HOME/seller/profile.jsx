import React,{useContext,useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AuthContext from "../auth.js"; 
import { Typography } from "@mui/material";
import axios from "axios";

const Profile=()=>{

    const { token } = useContext(AuthContext);
    const [formData, setFormData] = useState({
      username:'',
      email: "",
      password: "",
      
    });
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value,
      });
    };
  
    const update=async(id,obj)=>{
await axios.put(`http://localhost:3000/api/user/updateUser/:${id}`,obj)
.then()
.catch((err)=>console.log(err))
    }

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '45ch' },
          marginLeft:65,
          
        }}
        noValidate
        autoComplete="off"
      >

       <Box
       sx={{
        marginTop:15,
        width:'60%'
       }} >
       <Typography sx={{    marginTop:4,   }} variant="h4" gutterBottom>
           UserName: {token.username}
        </Typography >
        <Typography  sx={{    marginTop:4,   }} variant="h4" gutterBottom>
           Email: {token.email}
        </Typography>
        <Typography sx={{    marginTop:4,   }} variant="h4" gutterBottom >
          Password:  {token.password}
        </Typography>
        <Typography sx={{    marginTop:4,   }} variant="h4" gutterBottom >
          Role {token.role}
        </Typography>
       </Box>
        

        <TextField id="outlined-basic" value={formData.username} onChange={handleChange} label="UserName" variant="outlined" />
        <TextField id="outlined-basic" value={formData.email} onChange={handleChange} label="Email" variant="outlined" />
        <TextField id="outlined-basic" value={formData.password} onChange={handleChange} label="Password" variant="outlined" />
        <Button onClick={()=>update(token.user_id,formData)} variant="contained" disableElevation>
      Update Profile
    </Button>
      </Box>

    )
}
export default Profile