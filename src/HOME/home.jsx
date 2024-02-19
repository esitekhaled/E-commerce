import React, { useState } from "react";
import Nav from "./navbar.jsx";
import { Box } from '@mui/system';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flashsales from "./falshsales.jsx";
import BestSales from './bestselling.jsx';
import BrowseCategory from './browseCategory.jsx';
import Explore from './exploreProduct.jsx';
import Footer from './footer.jsx';
import LogSign from "./log-sig/principle.jsx"; 
import Log from './log-sig/log.jsx'; 
import Wishlist from "./wishlist/wishlist.jsx";
import Seller from "./seller/seller.jsx";
import Cart from './cart/cart.jsx'
import Client from "./clientDashboard/client.jsx";
import AuthContext from "./auth.js";
import Admin from "./admindashborad/admin.jsx";
import Women from "./CATEGORY/Woman'sFashion.jsx";
import Men from "./CATEGORY/Men'sFashion.jsx";
import Electronic from "./CATEGORY/Electronic.jsx";
import Hmoe from "./CATEGORY/Home&LifeStyle.jsx";
import Medcine from "./CATEGORY/Medicine.jsx";
import Sport from "./CATEGORY/Sports&Outdoor.jsx";
import BabyandToy from "./CATEGORY/Baby's&Toys.jsx";
import Pets from "./CATEGORY/Groceries&Pets.jsx";
import Health from "./CATEGORY/Health&Beauty.jsx";
import Contact from "./Contact.jsx";
const Home = () => {


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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [activeView, setActiveView] = useState('home'); 
  const [token,setToken]=useState({})
  const handleNavItemClick = (item) => {
    setActiveView(item);
  };
  const handletok=(item)=>{
    setToken(item)
  }

  const authContextValue = {
    token,
    setToken: handletok,
  };


  return (
    
<AuthContext.Provider value={authContextValue}>
    <div style={{ display: 'block', height: '100%',width:"100%" }}>
      <Nav onItemClick={handleNavItemClick} />

      {activeView === "profile"&& token.role === "admin" && <Admin   />}

        {activeView === "profile" && token.role === "seller" && <Seller   />}
         {activeView === "profile" && token.role === "client" && <Client/>}
        { activeView === "cart" && <Cart/>}
        { activeView === "contact" && <Contact/>}

        { activeView === "wishlist" && <Wishlist  />}
        {activeView === 'login' && <Log handleNavItemClick={handleNavItemClick}  />}
        {activeView === 'signup' && <LogSign handleNavItemClick={handleNavItemClick}  />}
        { activeView === "Woman's Fashion" && <Women/>}
        { activeView === "Men's Fashion" && <Men/>}
        { activeView === "Electronic" && <Electronic/>}
        { activeView === "Home & LifeStyle" && <Hmoe/>}
        { activeView === "Medicine" && <Medcine/>}
        { activeView === "Sports & Outdoor" && <Sport/>}
        { activeView === "Baby's & Toys" && <BabyandToy/>}
        { activeView === "Groceries & Pets" && <Pets/>}
        { activeView === "Health & Beauty" && <Health/>}


        {activeView === 'home' && (
          <div style={{
            width: '100%',
            display: 'block',  
            height: '100%'
          }}>
           <div style={{display:'flex',marginLeft:60,width:'80%'}}>
           <Box
              component="ul"
              sx={{
                listStyleType: 'none',
                width: 350,
                height: 450,
                borderRadius: 1,
                marginLeft: 0,
                marginTop: 10,
                bgcolor: 'white',
                color: 'black',
                fontSize: 20,
                borderRight: 1,
              }}
            >
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleNavItemClick(menuItem)}
                    style={{
                      cursor: "pointer",
                      color: 'black',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '10px',
                      transition: 'background 0.3s, font-size 0.3s',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#f0f0f0';
                      e.target.style.fontSize = '24px';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.fontSize = '20px';
                    }}
                  >
                    {menuItem}
                  </a>
                </li>
              ))}
            </Box>
            <Slider
              {...settings}
              style={{ width: '70%', margin:'auto', marginTop: 10,height:500 }}
            >
              <div>
                <img
                  src="https://ima-school.com/wp-content/uploads/2023/02/LOGO-IMA.png"
                  alt="Slide 1"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/fr/5/51/Logo_Inter_mutuelles_assistance.png"
                  alt="Slide 2"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Slider>
           </div>

         <div style={{margin:'auto',width:'100%'}}>
            {<Flashsales  />}
            {<BrowseCategory />}
            {<BestSales  />}

            <div style={{ width: '80%', height: 500, marginTop: 30,margin:'auto' }}>
              <img style={{ width: '100%', height: 500, marginTop: 30 }} src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/speakers/sound-joy-new/image/pc/huawei-sound-joy-key-vision-pc-1110.jpg" alt="" />
            </div>
               {<Explore  />}
               {<Footer />}
       </div>


      </div>
      )}
      
    </div>
        </AuthContext.Provider>

  );
};

export default Home;
