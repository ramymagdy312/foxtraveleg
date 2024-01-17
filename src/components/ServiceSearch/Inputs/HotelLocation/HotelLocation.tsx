import React from "react";
import locations from "../../json/locations.json";
import { FaLocationDot } from "react-icons/fa6";

type props = {
  hotelLocation: string;
  changeHotelLocation: (newHotelLocation: string) => void;
};

const HotelLocation = (props: props) => {
  const { hotelLocation, changeHotelLocation } = props;

  return (
    <div className="hotelLocation">
      <div data-bs-toggle="dropdown" data-bs-auto-close="true" data-bs-offset="0,22">
        <h6 className="text-dark">Hotel Location</h6>
        <div className="">
          <span className="text-dark">
            {hotelLocation.length > 0 ? hotelLocation : "Where are you going?"}
          </span>
        </div>
      </div>
      {/* End location Field */}

      <div className="dropdown-menu">
        <ul className="hotelLocations_optionsList">
          {locations.map((location) => (
            <li
              key={location.id}
              className={`${hotelLocation === location.name ? "active" : ""}`}
              onClick={() => changeHotelLocation(location.name)}
            >
              <FaLocationDot className="icon" />
              <div className="d-flex flex-column">
                <span className="locationName">{location.name}</span>
                <span className="locationAddress">{location.address}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelLocation;
