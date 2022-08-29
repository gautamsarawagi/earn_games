import React from "react";
import {Carousel} from "react-responsive-carousel";
import image1 from "../../assets/img/Gamesquare_Carousel_1.png";
import image2 from "../../assets/img/Gamesquare_Carousel_2.jpg";
import "../../assets/css/Gamesquare.css";

function CarouselComponent() {
  return (
    <div>
      <Carousel >
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1% 2%" }}
      >
        <a href="https://www.premint.xyz/pinnacles/" target="_blank">
        <img
          src={image1}
          alt="Image here"
          loading="lazy"
          className="responsive"
          style={{borderRadius:'10px'}}
        />
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "1% 2%" }}>
      <a href="https://linktr.ee/earn.games" target="_blank">
      <img
          src={image2}
          alt="Image here"
          loading="lazy"
          className="responsive"
          style={{borderRadius:'10px'}}
        />
      </a>
      </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
