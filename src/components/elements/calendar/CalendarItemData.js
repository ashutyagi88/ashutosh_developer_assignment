import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMonth } from "./utils";
import CalendarHeader from "./CalendarHeader";
import Month from "./elements/Month";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../../store/calendarSlice";

function CalendarItemData() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const dispatch = useDispatch();
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const MonthThis = useSelector((state) => state.calendar.monthIndex);

  useEffect(() => {
    dispatch(calendarActions.setmonth(monthIndex));
  }, []);

  useEffect(() => {
    setCurrentMonth(getMonth(MonthThis));
  }, [MonthThis]);

  return (
    <CalendarStyle>
      <Div1>
        <CalendarHeader></CalendarHeader>
        <Div2>
          <Month month={currentMonth}></Month>
        </Div2>
      </Div1>
    </CalendarStyle>
  );
}

const CalendarStyle = styled.div`
  width: 55%;
  height: 80%;
  margin-left: 20px;
  margin-top: 100px;
  margin-right: 10px;
`;

const Div1 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  display: flex;
  flex: 1 1 0%;
`;

export default CalendarItemData;
