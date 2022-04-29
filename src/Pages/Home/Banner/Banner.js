import React from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../Images/banner/banner1.jpg";
import banner2 from "../../../Images/banner/banner2.jpg";
import banner3 from "../../../Images/banner/banner3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Football</h3>
          <p>90 minutes of awesomeness</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Cricket</h3>
          <p>No Cricket... No Life</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Ping Pong</h3>
          <p>Perfect your serve</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
