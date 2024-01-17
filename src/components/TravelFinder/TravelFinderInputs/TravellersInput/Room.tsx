// import NumberInput from "@/components/ui/NumberInput";
import { ITravelFinderChild, ITravelFinderRoom } from "../../TravelFinder_TYPES";
import ChildAge from "./ChildAge";
// import { deepCopyArray } from "@/utils/deepCopy";

type props = {
  number: number;
  room: ITravelFinderRoom;
  updateRoom: (room: ITravelFinderRoom, index: number) => void;
};

const Room = (props: props) => {
  const { room, number, updateRoom } = props;

  // Function to update how many adults in this room.
  const onAdultQtyChange = (newQty: number) => {
    updateRoom({ ...room, adults: newQty }, number - 1);
  };

  // Function to update how many childrens in this room.
  const onChildsQtyChange = (newQty: number) => {
    const currentChildren = room.children;
    const numberToUpdate = number - 1;

    let updatedChildren;

    if (newQty > currentChildren.length) {
      const newChildrenQty = newQty - currentChildren.length;
      const newChildren = Array.from({ length: newChildrenQty }, () => ({ age: 2 }));
      updatedChildren = [...currentChildren, ...newChildren];
    } else {
      updatedChildren = currentChildren.slice(0, newQty);
    }

    updateRoom({ ...room, children: updatedChildren }, numberToUpdate);
  };

  // Function to update the age of each child.
  // creates a copy of the children => update the specific child => sent the updated array to the parent.
  const onChildAgeChange = (newAge: number, index: number) => {
    // const childrenCopy = deepCopyArray(room.children);
    // childrenCopy[index].age = newAge;
    // updateRoom({ ...room, children: [...childrenCopy] }, number - 1);
  };

  return (
    <div className="traveller_room">
      <div className="traveller_room_title">
        <h6>Room {number}</h6>
        <span></span>
      </div>

      <div className="counters_list">
        <div className="counter adults">
          <h6 className="title">Adults</h6>
          {/* <NumberInput onChange={onAdultQtyChange} min={1} max={6} initialValue={room.adults} /> */}
        </div>

        <div className="counter children">
          <h6 className="title">Childs (up to 11 years)</h6>
          {/* <NumberInput
            onChange={onChildsQtyChange}
            min={0}
            max={4}
            initialValue={room.children.length}
          /> */}
        </div>
      </div>

      <div className="tf_room_childs_list">
        {room.children?.length > 0 &&
          room.children.map((child, i) => (
            <ChildAge key={i} child={child} index={i} onChildAgeChange={onChildAgeChange} />
          ))}
      </div>
    </div>
  );
};

export default Room;
