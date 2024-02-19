import React, { useState } from "react";
import Profile from "./profile.jsx"; 
import { Box } from "@mui/material";
const Client = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("profile");

  const menuItems = [
    
    "profile",
  ];

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };



  return (
    <div>

      <div style={{ display: 'flex', width: '100%', height: '100%', marginTop: 20 }}>
        <Box
          component="ul"
          sx={{
            listStyleType: 'none',
            width: 300,
            height: 350,
            borderRadius: 1,
            marginLeft: 10,
            marginTop: 10,
            bgcolor: 'white',
            color: 'black',
            fontSize: 20,
            borderRight: 1,
            position: 'fixed',
            textTransform: 'uppercase'
          }}
        >
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a
                style={{
                  cursor: "pointer",
                  color: activeMenuItem === menuItem ? 'white' : 'black',
                  backgroundColor: activeMenuItem === menuItem ? 'black' : 'white',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '10px',
                  transition: 'background 0.3s, font-size 0.3s',
                }}
                onClick={() => handleMenuItemClick(menuItem)}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                  e.target.style.fontSize = '24px';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = activeMenuItem === menuItem ? 'black' : 'white';
                  e.target.style.fontSize = '20px';
                }}
              >
                {menuItem}
              </a>
            </li>
          ))}
        </Box>

        {<Profile/>}

      </div>


    </div>
  );
}

export default Client;
