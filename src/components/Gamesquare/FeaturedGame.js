import React from "react";
import {featured_game} from "../../data/GameSquare_Data"
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";

import image from "../../assets/img/featured_game.png";
function FeaturedGame() {
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
        <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            #{featured_game.Rank}
          </Typography>

          <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />

          <Typography gutterBottom variant="h6" component="div">
            {featured_game.Name}
          </Typography>
        </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default FeaturedGame;
