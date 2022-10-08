import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { calendarActions } from "../../../../store/calendarSlice";

function Day({ day, rowIdx }) {
  const dispatch = useDispatch();

  const handleSlot = () => {
    dispatch(calendarActions.openslot());
    dispatch(
      calendarActions.openslot(
        dayjs(
          new Date(dayjs(day).year(), dayjs(day).month(), dayjs(day).date())
        ).format("DD MMMM YYYY")
      )
    );
  };

  return (
    <DayStyle onClick={handleSlot}>
      <header>
        <p className="date">{day.format("DD")}</p>
      </header>
    </DayStyle>
  );
}

const DayStyle = styled.div`
  border: 1px solid grey;
  margin: 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p.date {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 1px;
    margin: 1px 0;
    text-align: center;
  }
`;

export default Day;
