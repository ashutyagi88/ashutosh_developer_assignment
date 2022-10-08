import React from "react";
import styled from "styled-components";
import { GiGears } from "react-icons/gi";
import { AiFillVideoCamera } from "react-icons/ai";

function Navbar_Second() {
  return (
    <Navbar_SecondStyle>
      <h2>
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664910142/handshake_eprawq.png"
            alt=""
          />
        </span>
        <span>Welcome</span>
      </h2>
      <h2>
        <span style={{ display: "flex", alignItems: "center" }}>
          <GiGears />
        </span>
        <span>Setup</span>
      </h2>
      <h2>
        <span style={{ display: "flex", alignItems: "center" }}>
          <AiFillVideoCamera />
        </span>
        <span>Meet</span>
      </h2>
      <h2>
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664910543/icons8-review-64_jvzcrs.png"
            alt=""
          />
        </span>
        <span>Review</span>
      </h2>
      <h2>
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664910543/icons8-write-96_bsiqlg.png"
            alt=""
          />
        </span>
        <span>Write</span>
      </h2>
    </Navbar_SecondStyle>
  );
}

const Navbar_SecondStyle = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  align-items: center;
  padding: 1% 0.5%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  cursor: pointer;

  img {
    width: 1.8vw;
    height: 1.8vw;
  }

  svg {
    width: 1.8vw;
    height: 1.8vw;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    width: 8%;
    justify-content: space-around;
    margin-right: 3%;
    height: 150%;

    :active {
      color: red;
      border-bottom: 3px solid red;
    }
  }
`;

export default Navbar_Second;
