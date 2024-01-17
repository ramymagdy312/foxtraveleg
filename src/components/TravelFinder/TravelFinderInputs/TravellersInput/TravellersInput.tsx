import React, { useState } from "react";
import InputHeader from "../InputHeader";
import InputFooter from "../InputFooter";
// import NumberInput from "@/components/ui/NumberInput";
import Room from "./Room";
import RoomsQTY from "./RoomsQTY";
import { ITravelFinderFormState, ITravelFinderRoom } from "../../TravelFinder_TYPES";
// import { deepCopyArray } from "../../../../utils/deepCopy";
import RoomsList from "./RoomsList";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { searchCriteriaActions } from "@/src/redux/slices/searchCriteriaSlice";

type props = {
  closeModal: () => void;
};

const TravellersInput = (props: props) => {
  const { closeModal } = props;
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.searchCriteria.rooms);

  // Creates a local state of the rooms, will be sent to the parent on confirmChoosen();
  const [localRooms, setLocalRooms] = useState(rooms);

  // Send the local rooms state to the formState hook.
  const confirmChoosen = () => {
    dispatch(searchCriteriaActions.updateRooms(localRooms));
  };

  // Function to update the local copy of the rooms, will be invoked from <Room /> with the updated room.
  const updateRoom = (room: ITravelFinderRoom, index: number) => {
    // setLocalRooms((prev) => {
    //   const roomsCopy = deepCopyArray(prev);
    //   roomsCopy[index] = room;
    //   return roomsCopy;
    // });
  };

  // Function to update the quantity of room (how many rooms).
  const changeRoomsQty = (newQty: number) => {
    if (newQty > rooms.length) {
      const newRoomsQty = newQty - rooms.length;
      const newRooms = Array.from({ length: newRoomsQty }, () => ({ adults: 1, children: [] }));
      setLocalRooms((prev) => [...prev, ...newRooms]);
    } else if (newQty === rooms.length) {
      setLocalRooms(rooms);
    } else {
      setLocalRooms((prev) => prev.slice(0, newQty));
    }
  };

  return (
    <div className="tf_input_form travellers">
      <InputHeader title="Select all travellers" />

      <div className="tf_input_form-body">
        <RoomsQTY qty={rooms.length} changeRoomsQty={changeRoomsQty} />
        <RoomsList rooms={localRooms} updateRoom={updateRoom} />
      </div>

      <InputFooter closeModal={closeModal} confirmChoosen={confirmChoosen} />
    </div>
  );
};

export default TravellersInput;
