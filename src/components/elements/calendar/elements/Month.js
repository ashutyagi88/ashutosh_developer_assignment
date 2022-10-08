import React from "react";
import styled from "styled-components";
import Day from "./Day";

function Month({ month }) {
  return (
    <MonthStyle>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i}></Day>
          ))}
        </React.Fragment>
      ))}
    </MonthStyle>
  );
}

const MonthStyle = styled.div`
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
`;

export default Month;
