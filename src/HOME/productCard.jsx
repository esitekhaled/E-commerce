import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import LaptopIcon from "@mui/icons-material/Laptop";
import WatchIcon from "@mui/icons-material/Watch";

const ProductCard = ({ title, category, icon }) => {
  const getCategoryIcon = () => {
    switch (icon.toLowerCase()) {
      case "phone":
        return <PhoneIcon  style={{ fontSize: 60 }} />;
      case "laptop":
        return <LaptopIcon  style={{ fontSize: 60 }}/>;
      case "watch":
        return <WatchIcon  style={{ fontSize: 60 }} />;
      // Add more categories and icons as needed
      default:
        return null;
    }
  };

  return (
    <Card sx={{ width: 200, height: 200, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CardMedia component="div" sx={{ height: 140 }}>
        {getCategoryIcon()}
      </CardMedia>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
