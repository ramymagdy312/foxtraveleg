import React, { useEffect, useState } from "react";

type props = {
  qty: number;
  changeRoomsQty: (newQty: number) => void;
};

const RoomsQTY = (props: props) => {
  const { changeRoomsQty } = props;
  const [qty, setQty] = useState(props.qty);

  useEffect(() => {
    setQty(props.qty);
  }, [props]);

  return (
    <div className="rooms_quantity">
      <div onClick={() => changeRoomsQty(1)} className={`qty_option ${qty === 1 ? "active" : ""}`}>
        1 Room
      </div>
      <div onClick={() => changeRoomsQty(2)} className={`qty_option ${qty === 2 ? "active" : ""}`}>
        2 Rooms
      </div>
      <div onClick={() => changeRoomsQty(3)} className={`qty_option ${qty === 3 ? "active" : ""}`}>
        3 Rooms
      </div>
      <div onClick={() => changeRoomsQty(4)} className={`qty_option ${qty === 4 ? "active" : ""}`}>
        4 Rooms
      </div>
      <div onClick={() => changeRoomsQty(5)} className={`qty_option ${qty === 5 ? "active" : ""}`}>
        5 Rooms
      </div>
    </div>
  );
};

export default RoomsQTY;
