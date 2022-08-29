import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { OutlinedFlag } from "@mui/icons-material";

function AcademyCard({data}) {
  
  return (
    <div>
      <Card sx={{ maxWidth: 360,px: 3,my:2,pt:2 }}>
        <CardMedia
          component="img"
          height="230"
          image = {data.image}
          alt={data.name}
          style={{borderRadius:'10px'}}
        />
        <CardContent>
          <Button>{data.type}</Button>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'550'}}>
          {data.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          {data.content}
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex',alignItems:'center'}}>
          <div>
          <CalendarMonthIcon/>
          </div>
          <Typography gutterBottom variant="h6" component="div" >
            Starting : <span color="text.secondary">{data.date}</span>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default AcademyCard;
