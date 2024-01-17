import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useEffect, useState } from "react";
import { ITravelFinderFormState } from "../TravelFinder_TYPES";
import { useModal } from "../hooks/useModal";
import DatesInput from "../TravelFinderInputs/DatesInput/DatesInput";
import { useAppSelector } from "@/src/redux/store";
import { formatDate } from "@/src/utils/dateFormatter";
import Modal from "../../common/Modal";

const Dates = () => {
  const departureDate = useAppSelector((state) => state.searchCriteria.departure_date);
  const returnDate = useAppSelector((state) => state.searchCriteria.return_date);

  const { isModalOpen, openModal, closeModal } = useModal();
  const [summaryData, setSummaryData] = useState("01/01/23 - 31/12/24");

  useEffect(() => {
    const departure_date = formatDate(departureDate, "dd/mm/yy");
    const return_date = formatDate(returnDate, "dd/mm/yy");
    setSummaryData(`${departure_date} - ${return_date}`);
  }, [departureDate, returnDate]);

  return (
    <>
      <div className="input_summary dates" onClick={openModal}>
        <div className="input_summary-icon">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div>
          <p className="input_summary-title">Select your date range</p>
          <p className="input_summary-data">{summaryData}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <DatesInput closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Dates;
