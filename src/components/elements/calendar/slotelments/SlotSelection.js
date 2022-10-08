import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { slotData } from "./SlotData";
import Slots from "./Slots";

function SlotSelection() {
  const slot = useSelector((state) => state.calendar.sidebarComp);
  return (
    <>
      {slot ? (
        <SlotStyle>
          {slotData.map((slot) => (
            <Slots key={slot.id} time={slot.time}></Slots>
          ))}
        </SlotStyle>
      ) : (
        <></>
      )}
    </>
  );
}

const SlotStyle = styled.div`
  width: 90%;
  height: 50%;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export default SlotSelection;
