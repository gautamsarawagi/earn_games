import React, { useEffect, useState } from "react";
import { Grid, Card, Typography } from "@mui/material";

import CarouselComponent from "./CarouselComponent";
import FeaturedGame from "./FeaturedGame";
import NftLaunches from "./NftLaunches";
import GameCardList from "./GameCardList";

import { useDispatch, useSelector } from "react-redux";
import { fetchGamesquareData } from "../../redux/gamesquare/actions";

function Gamesquare() {
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.gamesquareReducer);

  const featuredGame = gameData.filter((item) => item.rank === 1);

  useEffect(() => {
    dispatch(fetchGamesquareData());
  }, []);

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: "2% 2% 0" }}>
        <Grid item lg={9} xs={12}>
          <CarouselComponent />
        </Grid>

        <Grid item lg={3} xs={12}>
          <FeaturedGame data={featuredGame} />
        </Grid>
      </Grid>

      <div style={{ padding: "2%" }}>
        <NftLaunches />
      </div>

      <div style={{ padding: "2%" }}>
        <Typography variant="h6" component="div" sx={{ mt: 5 }}>
          Game description
        </Typography>

        <GameCardList gameData={gameData} />
      </div>
    </div>
  );
}

export default Gamesquare;
