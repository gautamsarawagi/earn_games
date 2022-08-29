import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import image from "../../assets/img/featured_game.png";

import {Carousel} from "react-responsive-carousel";

function GameCardList({ gameData }) {

  return (
    <Card sx={{maxWidth: 400, mt: 2, p: 1 }}>
      <Carousel showArrows={true}>
        {gameData.map((data, index) => {
          return (
            <div>
              <Card sx={{maxWidth: 350,py:4 }} key={index}>
                <CardMedia
                  component="img"
                  height="150"
                  image={image}
                  alt="green iguana"
                />

                <Button variant="outlined" size="small" sx={{ mt: 2 }}>
                  BSC
                </Button>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>

                  <Typography gutterBottom variant="body1" component="div">
                    {data.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" variant="contained">
                    Go Ahead
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </Card>
  );
}

export default GameCardList;
