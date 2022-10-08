import React from "react";
import styled from "styled-components";

function MeetFeature() {
  return (
    <MeetFeatureStyle>
      <img
        src="https://res.cloudinary.com/tyagiashu88/image/upload/v1665240146/Screenshot_2022-10-08_at_8.11.26_PM_mufnu7.png"
        alt=""
      />
    </MeetFeatureStyle>
  );
}

const MeetFeatureStyle = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  padding-top: 80px;
  margin-left: 30px;

  img {
    width: 82%;
    height: 100%;
  }
`;

export default MeetFeature;
