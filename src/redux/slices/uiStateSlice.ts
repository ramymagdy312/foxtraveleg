import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSection: "Dashboard",
  sidebarCollapsed: false,
};

const uiStateSlice = createSlice({
  name: "rendering",
  initialState,
  reducers: {
    changeSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const uiActions = uiStateSlice.actions;

export default uiStateSlice;
