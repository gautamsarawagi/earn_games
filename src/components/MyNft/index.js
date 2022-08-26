import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import SearchBox from "./SearchBox"

function MyNft() {
  return (
    <div>
      <div style={{display:"flex",justifyContent:'center',padding:"2% 0"}}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Typography gutterBottom variant="h4" component="div">
            NFT
          </Typography>

          <Typography gutterBottom variant="h4" component="div">
            OWN 0
          </Typography>
        </Stack>
      </div>

      <div style={{display:"flex",justifyContent:'center',padding:"2% 0"}}>
        <SearchBox />
      </div>
    </div>
  );
}

export default MyNft;
