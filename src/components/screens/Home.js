import { Box, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CalendarItemData from "../elements/calendar/CalendarItemData";
import CalendarSidebar from "../elements/calendar/CalendarSidebar";
import FormContent from "../elements/home/FormContent";
import HomeContent from "../elements/home/HomeContent";
import { GrFormClose } from "react-icons/gr";
import { calendarActions } from "../../store/calendarSlice";

function Home() {
  const modal = useSelector((state) => state.calendar.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(calendarActions.openModal(false));
  };

  return (
    <HomeStyle>
      <HomeContent></HomeContent>
      <HomeForm>
        <FormContent></FormContent>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ModalDiv>
              <ModalHead>
                <h1>Select a Time</h1>
                <GrFormClose
                  style={{
                    marginRight: "20px",
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                  onClick={handleClose}
                ></GrFormClose>
              </ModalHead>
              <CalendarItemData></CalendarItemData>
              <CalendarSidebar></CalendarSidebar>
            </ModalDiv>
          </Box>
        </Modal>
      </HomeForm>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 90vw;
  height: 100vh;
  background-color: red;
  margin: 0 auto;
  display: flex;
`;

const HomeForm = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const ModalHead = styled.div`
  font-family: "Poppins", sans-serif;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d5d5d5;
  width: 68.5%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
`;

const ModalDiv = styled.div`
  font-family: "Poppins", sans-serif;
  width: 70%;
  height: 80%;
  background-color: #e6e6e6 !important;
  display: flex;
`;

export default Home;
