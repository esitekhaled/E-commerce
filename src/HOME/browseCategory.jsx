import React from "react";
import ProductCard from "./productCard.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BrowseCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '80%', marginTop: 100, height: 400, borderTop: '1px solid black', marginLeft: 100, boxShadow: 4 }}>
      <h1 style={{ marginTop: 50, marginLeft: 70,fontSize:35,width:1000 }}>Browse By Category</h1>

      <Slider {...settings} style={{ width: '100%', marginLeft: 60, marginTop: 90, display: 'flex', alignItems: 'left' }}>
        <ProductCard title="Phone Product" category="Phone" icon="phone" />
        <ProductCard title="Laptop Product" category="Laptop" icon="laptop" />
        <ProductCard title="Watch Product" category="Watch" icon="watch" />
        <ProductCard title="Phone Product" category="Phone" icon="phone" />
        <ProductCard title="Laptop Product" category="Laptop" icon="laptop" />
        <ProductCard title="Watch Product" category="Watch" icon="watch" />
        <ProductCard title="Phone Product" category="Phone" icon="phone" />
        <ProductCard title="Laptop Product" category="Laptop" icon="laptop" />
        <ProductCard title="Watch Product" category="Watch" icon="watch" />
      </Slider>
    </div>
  );
};

export default BrowseCategory;
