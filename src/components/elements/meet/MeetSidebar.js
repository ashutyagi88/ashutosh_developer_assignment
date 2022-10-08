import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";

function MeetSidebar() {
  return (
    <MeetSidebarStyle>
      <StyledCard>
        <CardHeader>
          <h3>Company Description</h3>
        </CardHeader>
        <CardImg>
          <img
            src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664912237/Screenshot_2022-10-05_at_1.04.40_AM_viisqm.png"
            alt=""
          />
        </CardImg>
        <CardContent>
          <p>
            Ganga Confectionery is listed under Sweet Shops in Rajendra Nagar
            Sector 5, Sahibabad, Delhi.
          </p>
          <p>
            From cakes to brownies, and cupcakes to macarons, cake shops in
            Sahibabad, Delhi are your go-to hotspot for treating your sweet
            tooth.
          </p>
        </CardContent>
        <CardFooter>
          <h3>About the Interviewer</h3>
          <p>
            <span style={{ fontWeight: "bolder" }}>Madhuri Rao </span>is the
            Operations manager of Ganga Confectionery Pvt. Ltd.She's añ
            Executive MBA in Operations Management, carrying along rich 14+
            years of work experience. which has a blend of experience earned
            from companies like Amul, Cadbury, pizza hut, etc
          </p>
        </CardFooter>
      </StyledCard>
    </MeetSidebarStyle>
  );
}

const MeetSidebarStyle = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;

const StyledCard = styled(Card)`
  height: 90%;
  width: 80%;
  background-color: #b6e3e6 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 3% !important;
`;

const CardHeader = styled.div`
  padding-top: 10px;
  h3 {
    text-decoration: underline;
  }
`;

const CardImg = styled.div`
  height: 35%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
    border-radius: 3%;
  }
`;

const CardContent = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: smaller;

  p {
    font-size: 0.7vw;
  }
`;

const CardFooter = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-decoration: underline;
  }
  font-size: smaller;

  p {
    font-size: 0.8vw;
  }
`;

export default MeetSidebar;
