import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

function Navbar_First() {
  const loggedUser = useSelector((state) => state.user.user);
  return (
    <Navbar_FirstStyle>
      <NavbarLeft>
        <img
          src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664908904/Screenshot_2022-10-05_at_12.07.39_AM_rz1zpp.png"
          alt=""
        />
        <h3>
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaChevronDown></FaChevronDown>
          </span>
          <span>Home</span>
        </h3>
        <h3>
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaChevronDown></FaChevronDown>
          </span>
          <span>Discover</span>
        </h3>
        <h3>
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaChevronDown></FaChevronDown>
          </span>
          <span>Reward</span>
        </h3>
        <h3>
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaChevronDown></FaChevronDown>
          </span>
          <span>Others</span>
        </h3>
      </NavbarLeft>
      <NavbarRight>
        <h3>{loggedUser ? loggedUser : "Account"}</h3>
        <Avatar></Avatar>
      </NavbarRight>
    </Navbar_FirstStyle>
  );
}

const Navbar_FirstStyle = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1px;
  border-top: 5px solid black;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 15%;
    cursor: pointer;
  }

  img {
    width: 10%;
    height: 10%;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;

  h3 {
    padding-right: 10%;
  }
  padding-right: 2%;
`;

export default Navbar_First;
