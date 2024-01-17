import React from "react";
import { ITravelFinderRoom } from "../../TravelFinder_TYPES";
import Room from "./Room";

type props = {
  rooms: ITravelFinderRoom[];
  updateRoom: (newRoom: ITravelFinderRoom, index: number) => void;
};

const RoomsList = (props: props) => {
  const { rooms, updateRoom } = props;
  return (
    <div className="travellers_room_list">
      {rooms?.length > 0 &&
        rooms.map((room, i) => <Room key={i} updateRoom={updateRoom} room={room} number={i + 1} />)}
    </div>
  );
};

export default RoomsList;
