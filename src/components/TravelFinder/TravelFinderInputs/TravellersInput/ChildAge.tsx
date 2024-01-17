import React from "react";
import { ITravelFinderChild } from "../../TravelFinder_TYPES";
// import SelectInput from "@/components/ui/SelectInput";

type props = {
  index: number;
  child: ITravelFinderChild;
  onChildAgeChange: (newAge: number, index: number) => void;
};

const ChildAge = (props: props) => {
  const { child, index, onChildAgeChange } = props;

  const onAgeChangeHandler = (newAge: number) => {
    onChildAgeChange(newAge, index);
  };

  return (
    <div className="tf_room_child">
      <h6 className="title">Age of child {index + 1} </h6>
      {/* <SelectInput
        options={[
          { value: "2", title: "< 2 Years", selected: child.age === 2 },
          { value: "3", title: "3 Years", selected: child.age === 3 },
          { value: "4", title: "4 Years", selected: child.age === 4 },
          { value: "5", title: "5 Years", selected: child.age === 5 },
          { value: "6", title: "6 Years", selected: child.age === 6 },
          { value: "7", title: "7 Years", selected: child.age === 7 },
          { value: "8", title: "8 Years", selected: child.age === 8 },
          { value: "9", title: "9 Years", selected: child.age === 9 },
          { value: "10", title: "10 Years", selected: child.age === 10 },
          { value: "11", title: "< 11 Years", selected: child.age === 11 },
        ]}
        onChange={onAgeChangeHandler}
      /> */}
    </div>
  );
};

export default ChildAge;
