import React from "react";
import styled from "styled-components";
import MeetFeature from "./MeetFeature";
import MeetSidebar from "./MeetSidebar";

function MeetScreenContent() {
  return (
    <MeetContentStyle>
      <MeetFeature></MeetFeature>
      <MeetSidebar></MeetSidebar>
    </MeetContentStyle>
  );
}

const MeetContentStyle = styled.div`
  width: 100%;
  height: 83%;
  display: flex;
`;

export default MeetScreenContent;
