import React from "react";
import styled from "styled-components";
import MeetScreenContent from "../elements/meet/MeetScreenContent";
import Navbar_First from "../elements/navbar/Navbar_First";
import Navbar_Second from "../elements/navbar/Navbar_Second";

function MeetScreen() {
  return (
    <MeetScreenStyle>
      <Navbar_First></Navbar_First>
      <Navbar_Second></Navbar_Second>
      <MeetScreenContent></MeetScreenContent>
    </MeetScreenStyle>
  );
}

const MeetScreenStyle = styled.div`
  width: 90vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default MeetScreen;
