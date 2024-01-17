import React, { useState } from "react";
import Option from "./Option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

// ==============================      component      ================================= //
const CityDestOptions = (props: props) => {
  const { city, updateDestinations, choosenDestinations } = props;
  const [showHotels, setShowHotels] = useState(false);

  return (
    <div className="city_options_block">
      <div className="options_toggler" onClick={() => setShowHotels((prev) => !prev)}>
        <FontAwesomeIcon icon={showHotels ? faCaretUp : faCaretDown} />
      </div>

      <Option
        choosenCodes={choosenDestinations}
        code={city.city_code}
        title={city.city_name}
        updateDestinations={updateDestinations}
        className="city"
      />

      {showHotels &&
        city.hotels.length > 0 &&
        city.hotels.map((hotel) => (
          <Option
            key={hotel.id}
            choosenCodes={choosenDestinations}
            code={hotel.hotel_code}
            title={hotel.hotel_name}
            updateDestinations={updateDestinations}
            className="hotel"
          />
        ))}
    </div>
  );
};

export default CityDestOptions;

// ==============================      types      ================================= //
type hotel = {
  id: number;
  hotel_name: string;
  hotel_code: string;
};

type props = {
  city: {
    id: number;
    city_name: string;
    city_code: string;
    hotels: hotel[];
  };
  choosenDestinations: string[];
  updateDestinations: (newDestination: string) => void;
};
