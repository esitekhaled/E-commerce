import React,{useState,useContext} from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import AuthContext from "../auth.js"; // Update this path

const Add=(props)=>{
  const { token } = useContext(AuthContext);

    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[category,setCategory]=useState('')
    const[image,setImage]=useState('')    

const id=token.user_id

    const menuItems = [
        "Woman's Fashion",
        "Men's Fashion",
        "Electronic",
        "Home & LifeStyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
      ];
   
        const [open, setOpen] = useState(false);
      
        const handleChange = (event) => {
          console.log(event.target.value);
          setCategory(event.target.value);
        };
        const handlename = (event) => {
            setName(event.target.value);
          };
          const handleprice = (event) => {
            setPrice(event.target.value);
          };
          const handledescription = (event) => {
            setDescription(event.target.value);
          };
          const handleimage = (event) => {
            setImage(event.target.value);
          };
      
        const handleClose = () => {
          setOpen(false);
        };
      
        const handleOpen = () => {
          setOpen(true);
        };
    const obj={
        name:name,
        price:price,
        image:image,
        description:description,
        category:category

    }

    const create=(id,obj)=>{
        axios.post(`http://localhost:3000/api/productss/product/:${id}`,obj).then().catch((err)=>{console.log(err)})
    }
    

    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '65ch' },marginLeft:90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" gutterBottom>
        Add product
        </Typography>
        <TextField id="name" label="name" variant="outlined" onChange={handlename}  />
        <TextField id="price" label="price" type="price" variant="outlined" onChange={handleprice} />
        <TextField id="description" label="description" variant="outlined" onChange={handledescription} />
        <FormControl sx={{ m: 1, minWidth: 500 }}>
        <InputLabel id="demo-controlled-open-select-label">category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="category"
          onChange={handleChange}
        >
           {menuItems.map((menuItem, index) => (
          <MenuItem key={index}  value={menuItem} onChange={(e)=>console.log(e.target.value)}>{menuItem}</MenuItem>
           ))}
        </Select>
      </FormControl>
                <TextField id="image" label="image" onChange={handleimage}  variant="outlined" />

        <Button onClick={()=>{create(id,obj)}}  variant="contained" >
          ADD
        </Button>
       
      
      </Box>
    )
}
export default Add