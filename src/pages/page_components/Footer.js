import React from "react";
import {
  Grid,
  Paper,
  Typography,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: "2% 2% 0" }}>
        <Grid item lg={5} xs={12} sx={{ p: 3 }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "550", py: 2 }}
          >
            Earn Games
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2% 0",
            }}
          >
            <Typography variant="body1" component="div">
              Privacy Policy
            </Typography>

            <Typography variant="body1" component="div">
              Terms and Conditions
            </Typography>
          </div>

          <div style={{ padding: "2% 0" }}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                justifyContnet: "center",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Please Enter your Email"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                variant="contained"
                type="submit"
                sx={{ p: "10px", color: "blue" }}
                aria-label="search"
              >
                <SendIcon />
              </IconButton>
            </Paper>
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="outlined">
              <TwitterIcon color="white" />
            </Button>
            <Button variant="outlined">
              <FacebookIcon />
            </Button>
            <Button variant="outlined">
              <TelegramIcon />
            </Button>
            <Button variant="outlined">
              <YouTubeIcon />
            </Button>
          </div>
        </Grid>

        <Grid item lg={6} xs={12}>
          <Grid container spacing={2} sx={{ padding: "2% 2% 0" }}>
            <Grid item lg={6} sx={{ p: 3 }}>
              <Typography
                variant="h4"
                component="div"
                sx={{py: {lg: 2,sm : 1}}}
              >
                User Support
              </Typography>

              <Typography variant="body1" component="div" sx={{py: {lg : 1,sm : 0}}}>
                Help Center
              </Typography>

              <Typography variant="body1" component="div" sx={{py: {lg : 1,sm : 0}}}>
                Data Center
              </Typography>
            </Grid>
            <Grid item lg={6} sx={{ p: 3 }}>
            <Typography
                variant="h4"
                component="div"
                sx={{py:2 }}
              >
                Services Support
              </Typography>

              <Typography variant="body1" component="div" sx={{py : 1}}>
                EG Academy
              </Typography>

              <Typography variant="body1" component="div" sx={{py: 1}}>
                Token Economics
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" component="div" sx={{pt: {lg : 5}}}>
          Stay updated with the latest Play-to-Earn games!
          </Typography>

          
          <Typography variant="body1" component="div" sx={{pt: 2}}>
          Please enter your email and we will contact you within 1 working day
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
