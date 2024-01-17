import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import DestinationsInput from "../TravelFinderInputs/DestinationsInput/DestinationsInput";
import { ITravelFinderFormState } from "../TravelFinder_TYPES";
import { useModal } from "../hooks/useModal";
import { useAppSelector } from "@/src/redux/store";
import Modal from "../../common/Modal";

const Destinations = () => {
  const destinations = useAppSelector((state) => state.searchCriteria.destinations);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [summaryData, setSummaryData] = useState("Anywhere");

  useEffect(() => {
    destinations.length > 0 ? setSummaryData(destinations.join(", ")) : setSummaryData("Anywhere");
  }, [destinations]);

  return (
    <>
      <div className="input_summary destinations" onClick={openModal}>
        <div className="input_summary-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div>
          <p className="input_summary-title">Select your destination</p>
          <p className="input_summary-data">{summaryData}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <DestinationsInput closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Destinations;
