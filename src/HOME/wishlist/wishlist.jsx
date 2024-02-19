import React, { useEffect,useContext,useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import axios from "axios";
import AuthContext from "../auth.js";
const ReviewIcon = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? "warning" : "disabled"} />
  ));

  return <div>{stars}</div>;
};

const Wishlist = () => {
  const {token}=useContext(AuthContext)
  const [data, setData] = useState([]);
  const id = token.user_id

  useEffect( () => {
    const fetchData=async(id)=>{
    
        await axios.get(`http://localhost:3000/api/wishes/wishlist/:${id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
        
      
    }
    fetchData(id)
  }, [id]);

  const ReviewIcon = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? "warning" : "disabled"} />
    ));
  
    return <div>{stars}</div>;
  };

 

  const addTotheCart = async (userId,productId) => {
    try {
      await axios.post(`http://localhost:3000/api/productss/product/:${userId}/:${productId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", borderTop: "1px solid black", boxShadow: 4 }}>
      <div style={{ width: "100%", display: "flex" }}>
        <h1 style={{ marginTop: 60, marginLeft: 200, borderBottom: 1 }}>wishlist</h1>
      </div>

      <div style={{ width: "100%", margin: "auto", marginTop: 10, }}>
        {data.map((product) => (
          <Card
            key={product.product_id}
            sx={{ width: 300, height: 300, margin: "auto", marginLeft: 8, display: "inline-block", marginTop: 15 }}
          >
            <CardMedia component="img" height="160px" image={product.image} alt="Product" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.name} - {product.price}
                <ReviewIcon rating={4} />
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
            <Button
              onClick={() => addTotheCart(product.product_id, id)}
              sx={{ marginLeft: 20, marginTop: 5, backgroundColor: "red" }}
              variant="contained"
              disableElevation
            >
              ADD TO THE CART
            </Button>
          </Card>
        ))}


      </div>
    </div>
  );
};

export default Wishlist;
