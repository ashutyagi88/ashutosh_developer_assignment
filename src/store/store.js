import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./calendarSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    calendar: calendarSlice.reducer,
  },
});

export default store;
