import React, { useState } from "react";
import { ITravelFinderFormState } from "../../TravelFinder_TYPES";
import InputHeader from "../InputHeader";
import InputFooter from "../InputFooter";
import DatePicker from "react-datepicker";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { searchCriteriaActions } from "@/src/redux/slices/searchCriteriaSlice";
import { formatDate } from "@/src/utils/dateFormatter";

type props = {
  closeModal: () => void;
};

const DatesInput = (props: props) => {
  const departureDate = useAppSelector((state) => state.searchCriteria.departure_date);
  const returnDate = useAppSelector((state) => state.searchCriteria.return_date);
  const dispatch = useAppDispatch();

  const { closeModal } = props;
  const [startDate, setStartDate] = useState<Date | null>(departureDate);
  const [endDate, setEndDate] = useState<Date | null>(returnDate);

  const onChange = (dates: [Date, null] | [Date, Date] | [null, Date] | [null, null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Send the local state to the formState hook.
  const confirmChoosen = () => {
    dispatch(searchCriteriaActions.setDepartureDate(startDate));
    dispatch(searchCriteriaActions.setReturnDate(endDate));
  };

  return (
    <div className="tf_input_form dates">
      <InputHeader title="Choose your travel dates" />

      <div className="tf_input_form-body">
        <div className="choosen_date_list">
          <div className="choosen_date">
            <p className="title">Earliest Departure</p>
            <p className="date">{formatDate(startDate, "dd/mm/yyyy")}</p>
          </div>
          <div className="choosen_date">
            <p className="title">Latest Return</p>
            <p className="date">{formatDate(endDate, "dd/mm/yyyy")}</p>
          </div>
        </div>

        <div className="date_pickers">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            monthsShown={2}
            selectsRange
            inline
          />
        </div>
      </div>

      <InputFooter closeModal={closeModal} confirmChoosen={confirmChoosen} />
    </div>
  );
};

export default DatesInput;
