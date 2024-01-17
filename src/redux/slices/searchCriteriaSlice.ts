import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: searchCriteriaForm = {
  destinations: [],
  departure_date: new Date(),
  return_date: new Date(),
  promocode: "ddd",
  rooms: [
    {
      adults: 2,
      children: [],
    },
  ],
};

const searchCretieriaSlice = createSlice({
  name: "searchCriteria",
  initialState,
  reducers: {
    updateDestinations: (state, action: PayloadAction<string[]>) => {
      state.destinations = action.payload;
    },
    updateRooms: (state, action: PayloadAction<ITravelFinderRoom[]>) => {
      state.rooms = action.payload;
    },
    updatePromocode: (state, action: PayloadAction<string>) => {
      state.promocode = action.payload;
    },
    setDepartureDate: (state, action: PayloadAction<Date | null>) => {
      state.departure_date = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<Date | null>) => {
      state.return_date = action.payload;
    },
  },
});

export const searchCriteriaActions = searchCretieriaSlice.actions;

export default searchCretieriaSlice;

export type searchCriteriaForm = {
  destinations: string[];
  departure_date: Date | null;
  return_date: Date | null;
  rooms: ITravelFinderRoom[];
  promocode: string;
};

export type ITravelFinderRoom = {
  adults: number;
  children: ITravelFinderChild[] | [];
};

export type ITravelFinderChild = {
  age: number;
};
