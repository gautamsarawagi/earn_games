import React from "react";
import { Card, Typography, Grid,Button,Stack } from "@mui/material";

import image from "../../assets/img/nft_launch.png";

function NftLaunches() {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{mb : 3}}>
        Exclusive nft launches
      </Typography>

      <Card sx={{ maxWidth: 750, p: 3 }}>
        <Grid
          container
          spacing={2}
          sx={{ padding: "2% 2% 0", flexDirection: "row-reverse" }}
        >
          <Grid item lg={6} xs={11} sx={{justifyContent:'center'}}>
          <img
          src={image}
          height="300"
          alt="Image here"
          loading="lazy"
          className="responsive"
        />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography variant="h6" component="div" sx={{mb: 3}}>
            Buy NFT Mystery Boxes Exclusively At Earn.Games
            </Typography>

            <Typography variant="body1" component="div" sx={{mb: 3}}>
            This is an exclusive Mystery Box for sale and will only be accepted in a raffle for a limited time. Upon purchasing this Hero Box, you will receive an unopened Mystery Box that you can open, or transfer to someone else for sale. Revo’s regular hero box contains a variety of heroes with certain drop rates. Buying this NFT gives you the opportunity to acquire common and rare heroes at an exceptionally low price!
            </Typography>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
        <Button variant="contained" size="large">
          Go Ahead
        </Button>

        <Button variant="contained" size="large">
          Go to Buy
        </Button>
        </Stack>
        
      </Card>
    </div>
  );
}

export default NftLaunches;
