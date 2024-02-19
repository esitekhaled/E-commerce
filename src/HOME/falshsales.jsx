import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
// import { Box } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ReviewIcon = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
    ));
  
    return <div>{stars}</div>;
  };
const CustomCard = ({ title, price }) => (
    <Card sx={{ width: 300, height: 300, marginLeft: 15 }}>

    <CardMedia component="img" height='160px' image="https://www.ssbcrack.com/wp-content/uploads/2022/07/IMA-dehradun-cadet-1068x601.png" alt="Paella dish" />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {title} - {price}
        <ReviewIcon rating={2}/>
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </CardActions>
  </Card>
  );

const Flashsales=(props)=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5, // Set the number of cards to show at a time
        slidesToScroll: 1,
      };
    return(

        <div style={{width:'90%', marginTop:100,height:600, borderTop:'1px solid black',marginLeft:100,boxShadow:4}}>
          
      <h1 style={{marginTop:40,marginLeft:10,borderBottom:1}}>FLASH SALES:</h1> 




<Slider {...settings} style={{ width: '100%', marginLeft: 60, marginTop: 10, display: 'flex', alignItems: 'left' }}>
      <CustomCard title="PS5" price="500$" />
      <CustomCard title="Xbox Series X" price="450$" />
      <CustomCard title="Nintendo Switch" price="300$" />
      <CustomCard title="PS5" price="500$" />
      <CustomCard title="Xbox Series X" price="450$" />
      <CustomCard title="Nintendo Switch" price="300$" /> <CustomCard title="PS5" price="500$" />
      <CustomCard title="Xbox Series X" price="450$" />
      <CustomCard title="Nintendo Switch" price="300$" />
    </Slider>
    <Button sx={{marginLeft:90,marginTop:10,width:300,height:60,backgroundColor:'red'}} variant="contained"  disableElevation>
        VIEW ALL PRODUCT 
    </Button>


        </div>

    )
}

export default Flashsales

