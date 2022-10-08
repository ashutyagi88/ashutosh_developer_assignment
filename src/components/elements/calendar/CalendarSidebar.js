import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaSquareFull, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import SlotSelection from "./slotelments/SlotSelection";

function CalendarSidebar() {
  const DateThis = useSelector((state) => state.calendar.date);

  return (
    <SidebarStyle>
      <Sidebar>
        <DateContent className="tool-tip">
          <span>{DateThis}</span>
        </DateContent>
        <IconsBar>
          <span>
            <FaSquareFull color="#17d7ff"></FaSquareFull>
            <span>Morning</span>
          </span>
          <span>
            <FaCircle color="#ff96c0"></FaCircle>
            <span>Afternoon</span>
          </span>
          <span>
            <BsTriangleFill color="#f2e15c"></BsTriangleFill>
            <span>Evening</span>
          </span>
        </IconsBar>
        <SlotSelection></SlotSelection>
      </Sidebar>
    </SidebarStyle>
  );
}

const SidebarStyle = styled.div`
  width: 40%;
  height: 80%;
  margin-top: 75px;
  margin-right: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DateContent = styled.div`
  width: 100%;
  height: 8%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;

  .year-span {
    font-weight: 300;
  }
`;

const IconsBar = styled.div`
  width: 95%;
  height: 10%;
  padding-top: 10px;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;

  span {
    width: 30%;
    display: flex;
    align-items: center;

    span {
      padding-left: 10px;
    }
  }
`;

const Sidebar = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .tool-tip {
    position: relative;
    font-weight: bold;
    font-size: 20px;
    border: 5px solid #545f5a;
    padding: 0 25px;
    width: 65%;
    text-align: center;
    background-color: #545f5a;
    color: #ffffff;
  }

  .tool-tip::before {
    content: "";
    position: absolute;
    display: block;
    width: 0px;
    left: 50%;
    bottom: 0;
    border: 15px solid transparent;
    border-bottom: 0;
    border-top: 15px solid #545f5a;
    transform: translate(-50%, calc(100% + 5px));
  }
`;

export default CalendarSidebar;
