import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

import image from "../../assets/img/featured_game.png";
function FeaturedGame({data}) {
  console.log(data)

  const newObject = Object.assign({}, ...data.map(item => ({ "rank": item.rank, "name" : item.name })));

  return (
    <div>
      <div>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "550" }}
        >
          FEATURED GAMES
        </Typography>
      </div>
      <Card sx={{maxWidth: 350, p: 3 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          {newObject ? <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            #{newObject.rank}
          </Typography>

          <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />

          <Typography gutterBottom variant="h6" component="div">
            {newObject.name}
          </Typography>
        </Stack> : null}
        
        </CardContent>
      </Card>
    </div>
  );
}

export default FeaturedGame;
