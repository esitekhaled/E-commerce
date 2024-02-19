import React,{useContext} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AuthContext from "../auth.js"; 
import { Typography } from "@mui/material";

const Profile=()=>{

    const { token } = useContext(AuthContext);

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
        

        <TextField id="outlined-basic" label="UserName" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" disableElevation>
      Update Profile
    </Button>
      </Box>

    )
}
export default Profile