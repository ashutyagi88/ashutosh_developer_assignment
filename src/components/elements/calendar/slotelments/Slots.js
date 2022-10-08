import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { calendarActions } from "../../../../store/calendarSlice";

function Slots({ time }) {
  const dispatch = useDispatch();
  const handleSlot = () => {
    dispatch(calendarActions.selectedslot(time));
  };
  return <SlotStyle onClick={handleSlot}>{time}</SlotStyle>;
}

const SlotStyle = styled.span`
  width: 30%;
  height: 20%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #41b76c;
  cursor: pointer;
  color: #ffffff;
`;

export default Slots;
