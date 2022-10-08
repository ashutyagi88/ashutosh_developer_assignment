import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    monthIndex: 0,
    sidebarComp: false,
    date: "",
    slot: "",
    modal: false,
  },
  reducers: {
    setmonth(state, action) {
      state.monthIndex = action.payload;
    },
    nextmonth(state, action) {
      state.monthIndex++;
    },
    prevmonth(state, action) {
      state.monthIndex--;
    },
    openslot(state, action) {
      state.sidebarComp = true;
      state.date = action.payload;
    },
    selectedslot(state, action) {
      state.slot = action.payload;
    },
    openModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice;
