import React from "react";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../../store/calendarSlice";
import dayjs from "dayjs";

function CalendarHeader() {
  const dispatch = useDispatch();
  const MonthThis = useSelector((state) => state.calendar.monthIndex);
  const handlePrevMonth = () => {
    dispatch(calendarActions.prevmonth());
    console.log(MonthThis);
  };

  const handleNextMonth = () => {
    dispatch(calendarActions.nextmonth());
    console.log(MonthThis);
  };
  return (
    <>
      <HeaderStyle>
        <h2>
          <button onClick={handlePrevMonth}>
            <AiOutlineLeft></AiOutlineLeft>
          </button>
          <span>
            {dayjs(new Date(dayjs().year(), MonthThis)).format("MMMM YYYY")}
          </span>
          <button onClick={handleNextMonth}>
            <AiOutlineRight></AiOutlineRight>
          </button>
        </h2>
      </HeaderStyle>
      <WeekDays>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </WeekDays>
    </>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  padding: 4px 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 200px;
      border-top: 2px solid grey;
      border-bottom: 2px solid grey;
      padding: 0px 100px;
      text-align: center;
    }
  }

  button {
    background-color: transparent;
    border: 2px solid grey;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

const WeekDays = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  span {
    flex: 1 1 0%;
    text-align: center;
  }
`;

export default CalendarHeader;
