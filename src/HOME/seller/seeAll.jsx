import React, { useEffect, useState,useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import AuthContext from "../auth.js"; 
import FavoriteIcon from '@mui/icons-material/Favorite';

import axios from "axios";


const ReviewIcon = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index}  color={index < rating ? 'warning' : 'disabled'} />
    ));
  
    return <div>{stars}</div>;
  };


const SeeALL=(props)=>{
  const { token } = useContext(AuthContext);

 const id=token.user_id
const [sellerData,setSellerData]=useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/productss/product/${id}`);
      setSellerData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [id]);



const deleteProduct=(id)=>{
axios.delete(`http://localhost:3000/api/productss/product/:${id}`)
.then().catch((err)=>console.log(err))

}



    return(


        <div style={{width:'80%',height:'60%',marginLeft:500, borderTop:'1px solid black',boxShadow:4}}>

          <div style={{width:'100%',display:'flex'}}>
          <h1 style={{marginTop:60,marginLeft:40,borderBottom:1}}>ALL Your Product (8)</h1> 

          
          </div>


          <div style={{ width: '80%', margin: 'auto', }}>
            {sellerData.map((item,index)=>( 
                <Card key={index} sx={{ width: 250, margin: 'auto', display: 'inline-block', marginTop: 15, marginLeft: 5 }}>
                <CardMedia component="img" height='130px' image={item.image} alt="Product" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.name} - {item.price}
                    <ReviewIcon rating={0} />
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={()=>deleteProduct(item.product_id)} >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          
        
     
    </div>

        </div>

    )
}

export default SeeALL


// {/* <Slider {...settings}>
// {data.map((item, index) => (
//   <div key={index}>
//     <CustomCard title={item.title} price={item.price} />
//   </div>
// ))}
// </Slider> */}