import React, { useState, Dispatch, SetStateAction, ReactNode } from "react";

export type ITravelFinderForm = {
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

export type ITravelFinderFormState = {
  form: ITravelFinderForm;
  updateDestination: (newDestinations: string[]) => void;
  updateRooms: (newRooms: ITravelFinderRoom[]) => void;
  updatePromocode: (code: string) => void;
  setDepartureDate: (departureDate: Date | null) => void;
  setReturnDate: (returnDate: Date | null) => void;
  submitForm: (e: any) => void;
};
