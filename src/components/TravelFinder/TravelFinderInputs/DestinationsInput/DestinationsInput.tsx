import React, { useState } from "react";
import options from "@/public/data/destinationOptions.json";
import CityDestOptions from "./CityDestOptions";
// import SearchBar from "@/components/ui/SearchBar";
import InputHeader from "../InputHeader";
import InputFooter from "../InputFooter";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { searchCriteriaActions } from "@/src/redux/slices/searchCriteriaSlice";

const DestinationsInput = (props: props) => {
  const destinations = useAppSelector((state) => state.searchCriteria.destinations);
  const dispatch = useAppDispatch();
  const { closeModal } = props;
  const [choosenDestinations, setChoosenDestinations] = useState(destinations);

  const updateDestinations = (dest_code: string) => {
    setChoosenDestinations((prev) => {
      const newDestinations = [...prev];
      const index = newDestinations.indexOf(dest_code);

      if (index === -1) {
        newDestinations.push(dest_code);
      } else {
        newDestinations.splice(index, 1);
      }

      return newDestinations;
    });
  };

  const confirmChoosen = () =>
    dispatch(searchCriteriaActions.updateDestinations(choosenDestinations));

  return (
    <div className="tf_input_form destinations">
      <InputHeader title="Selct your destinations" />

      <div className="tf_input_form-body">
        {/* <SearchBar className="mb-2 mt-1" placeHolder="Destination or hotel" onChange={() => {}} /> */}
        <div className="city_block_list">
          {options?.length > 0 &&
            options.map((city) => (
              <CityDestOptions
                key={city.id}
                city={city}
                updateDestinations={updateDestinations}
                choosenDestinations={choosenDestinations}
              />
            ))}
        </div>
      </div>

      <InputFooter closeModal={closeModal} confirmChoosen={confirmChoosen} />
    </div>
  );
};

export default DestinationsInput;

type props = {
  closeModal: () => void;
};
