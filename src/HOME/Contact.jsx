import React, { useState } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <div style={{ marginRight: 1000, borderRadius: "90px" }}>
        <Container maxWidth="xs">
          <Box
            sx={{ bgcolor: "#f5f1f1", height: "60vh", borderRadius: "20px" }}
          >
            <div style={{ paddingTop: "1px" }}>
              <CallIcon
                sx={{ marginBlock: "140px", marginLeft: "30px", color: "red" }}
              />
              <Typography
                sx={{
                  marginTop: "-161px",
                  marginLeft: "90px",
                  textSizeAdjust: "auto",
                  fontFamily: "system-ui",
                }}
              >
                Call Us To{" "}
              </Typography>
              <Typography
                sx={{
                  marginTop: "20px",
                  marginLeft: "26px",
                  textSizeAdjust: "auto",
                  fontFamily: "system-ui",
                }}
              >
                You can visit us in RBK Welcome to coding world{" "}
              </Typography>
              <Typography
                sx={{
                  marginTop: "20px",
                  marginLeft: "30px",
                  textSizeAdjust: "auto",
                  fontFamily: "system-ui",
                }}
              >
                * Phone : 216 90 233 244
              </Typography>
              <EmailIcon
                sx={{
                  marginLeft: "30px",
                  marginTop: "30px",
                  color: "red",
                  borderRadius: "20cap",
                }}
              />
              <Typography
                sx={{
                  marginTop: "20px",
                  marginLeft: "30px",
                  textSizeAdjust: "auto",
                  fontFamily: "system-ui",
                }}
              >
                You can also Contact us on our E-mail :{" "}
              </Typography>
              <Typography
                sx={{
                  marginTop: "20px",
                  marginLeft: "30px",
                  textSizeAdjust: "auto",
                  fontFamily: "system-ui",
                }}
              >
                rbkmain@rbksenior.com{" "}
              </Typography>
            </div>
          </Box>
        </Container>
      </div>
      <div
        style={{
          marginRight: "-300px",
          marginTop: "-446px",
          paddingLeft: "100px",
        }}
      >
        <Container maxWidth="md" sx={{ paddingLeft: "100px" }}>
          <Box
            sx={{ bgcolor: "#f5f1f1", height: "60vh", borderRadius: "20px" }}
          >
            <TextField
              TextField="Name"
              sx={{ marginTop: "100px", marginLeft: "60px" }}
              placeholder="First Name"
            />
            <TextField
              TextField="Name"
              sx={{ marginTop: "100px", marginLeft: "40px" }}
              placeholder="Last Name"
            />
            <TextField
              TextField="Name"
              sx={{ marginTop: "100px", marginLeft: "40px" }}
              placeholder="Problem "
            />
            <Typography
              sx={{
                marginTop: "35px",
                marginLeft: "150px",
                textSizeAdjust: "auto",
                fontFamily: "system-ui",
              }}
            >
              Please talk to us about your problem and identify youself in the
              inputs below{" "}
            </Typography>

            <div style={{ marginLeft: "330px", marginTop: "30px" }}>
              <Button
                endIcon={<SendIcon />}
                variant="contained"
                sx={{ backgroundColor: "red" }}
                onClick={() => {
                  alert("Message send thanks for your report");
                }}
              >
                Send Report{" "}
              </Button>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
