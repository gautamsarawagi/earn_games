import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbData } from "../../redux/ab-program/actions";

function AmbassadorsProgram() {
  const dispatch = useDispatch();

  const ab_data = useSelector((state) => state.abProgramReducer);

  console.log(ab_data);

  useEffect(() => {
    dispatch(fetchAbData());
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1% 0" }}
      >
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeigh:'550'}}>
          Ambassadors Program
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "1% 0" }}>
      <Carousel
          autoFocus={true}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
          className="presentation-mode"
        >
          {ab_data.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1% 2%",
                }}
                key={index}
              >
                <img
                  src={item.link}
                  alt="Image here"
                  loading="lazy"
                  className="responsive"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default AmbassadorsProgram;
