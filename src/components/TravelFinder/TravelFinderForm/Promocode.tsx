import { useAppSelector } from "@/src/redux/store";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import PromocodeInput from "../TravelFinderInputs/PromocodeInput/PromocodeInput";
import { useModal } from "../hooks/useModal";

const Promocode = () => {
  const code = useAppSelector((state) => state.searchCriteria.promocode);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [summaryData, setSummaryData] = useState("Enter Promocode");

  useEffect(() => {
    if (code.length > 0) {
      setSummaryData(code);
    } else {
      setSummaryData("Enter Promocode");
    }
  }, [code]);

  return (
    <>
      <div className="input_summary promocode" onClick={openModal}>
        <div className="input_summary-icon">
          <FontAwesomeIcon icon={faStickyNote} />
        </div>
        <div>
          <p className="input_summary-title">Promocode</p>
          <p className="input_summary-data">{summaryData}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <PromocodeInput closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Promocode;
