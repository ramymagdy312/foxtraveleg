import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useEffect, useState } from "react";
import { ITravelFinderFormState } from "../TravelFinder_TYPES";
import { useModal } from "../hooks/useModal";
import TravellersInput from "../TravelFinderInputs/TravellersInput/TravellersInput";
import { useAppSelector } from "@/src/redux/store";
import Modal from "../../common/Modal";

const Travellers = () => {
  const rooms = useAppSelector((state) => state.searchCriteria.rooms);

  const { isModalOpen, openModal, closeModal } = useModal();
  const [summaryData, setSummaryData] = useState("2 Adults, 1 Room");

  useEffect(() => {
    const counts = rooms.reduce(
      (accumulator, room) => {
        accumulator.totalAdults += room.adults;
        accumulator.totalChildren += room.children.length;
        return accumulator;
      },
      { totalAdults: 0, totalChildren: 0 }
    );

    const roomsCount = rooms.length;
    const adultsCount = counts.totalAdults;
    const childsCount = counts.totalChildren;

    setSummaryData(
      `${adultsCount} ${adultsCount === 1 ? "Adult" : "Adults"}, ${
        childsCount > 0 ? `${childsCount} ${childsCount === 1 ? "Child" : "Children"},` : ""
      } ${roomsCount} ${roomsCount === 1 ? "Room" : "Rooms"}`
    );
  }, [rooms]);

  return (
    <>
      <div className="input_summary travellers" onClick={openModal}>
        <div className="input_summary-icon">
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
        <div>
          <p className="input_summary-title">Who will travel</p>
          <p className="input_summary-data">{summaryData}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TravellersInput closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Travellers;
