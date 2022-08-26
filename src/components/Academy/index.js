import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchAcademyData } from "../../redux/academy/actions";

import main_Image from "../../assets/img/academy-front.png";

import { Typography, Button, Grid } from "@mui/material";
import creator_example from "../../assets/img/creator_example.png";
import { academy_data } from "../../data/academy_data";
import AcademyCard from "./AcademyCard";

function Academy() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.academyRducer);

  const buttons = ["All", "WEB 3.0", "GAMER", "CREATOR", "TRADER"];

  const [buttonName, setButtonName] = useState("All");

  const [courseData, setCourseData] = useState([]);

  const getData = (item) => {
    if (item) {
      setButtonName(item);
    }
  };

  useEffect(() => {
    if (buttonName !== "All") {
      const updated_data = data.filter((item) => {
        return item.type === buttonName;
      });
      console.log(updated_data);
      setCourseData(updated_data);
    } else {
      setCourseData(data);
    }
  }, [buttonName,data]);

  useEffect(() => {
    dispatch(fetchAcademyData())
  },[])

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1% 2%" }}
      >
        <img
          src={main_Image}
          alt="Image here"
          loading="lazy"
          className="responsive"
          style={{ width: "100%" }}
        />
      </div>

      <Typography
        variant="h3"
        component="div"
        sx={{
          fontWeight: "550",
          fontSize: { lg: "3.5rem", sm: "2rem" },
          padding: "1% 2%",
        }}
      >
        Earn.Games Academy
      </Typography>

      <Typography variant="p" component="div" sx={{ padding: "2% 2%" }}>
        The goal of the EG academy is to develop, organize and share world-class
        educational content on Web 3.0 and blockchain-related topics by making
        it easily accessible to the community. EG Academy is the first of many
        steps to achieve our goal of building an equitable value-based society.
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: "550",
          fontSize: { lg: "2.5rem", sm: "2rem" },
          padding: "2% 2%",
        }}
      >
        LEARNING TRACKS
      </Typography>

      {buttons.map((item, index) => {
        return (
          <Button
            variant={buttonName === item ? "contained" : "outlined"}
            sx={{ m: 2 }}
            onClick={() => getData(item)}
            key={item}
          >
            {item}
          </Button>
        );
      })}

      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: "550",
          fontSize: { lg: "2rem", sm: "1.5rem" },
          padding: "2% 2%",
        }}
      >
        Available Courses
      </Typography>
      <Grid container spacing={2} sx={{ padding: "2% 2%" }}>
        {courseData.map((item, index) => {
          return (
            <>
              <Grid item lg={4} md={6} xs={12}>
                <AcademyCard
                  data={item}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default Academy;
