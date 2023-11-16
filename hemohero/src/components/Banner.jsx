import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <div>
        <img src={process.env.PUBLIC_URL + "./images/logo.png"} />
        <p>HemoHero</p>
      </div>
      <div></div>
    </>
  );
};

export default Banner;
