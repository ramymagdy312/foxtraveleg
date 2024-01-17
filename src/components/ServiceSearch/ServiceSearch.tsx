import React, { useState } from "react";
import SearchCategories from "./SearchCategories";
import CheckinCheckout from "./Inputs/CheckinCheckout/CheckinCheckout";
import { BiSearch } from "react-icons/bi";
import HotelGuests from "./Inputs/HotelGuests/HotelGuests";
import HotelLocation from "./Inputs/HotelLocation/HotelLocation";
// import Modal from "../common/Modal";
import ServiceRequestForm from "../ServiceRequestForm/ServiceRequestForm";
import Modal from "react-modal";

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim the background
    transition: "background-color 0.3s ease-in-out", // Fade in/out
    zIndex: 100,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "10px",
    width: "60vw",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.3s ease-in-out", // Fade in/out
  },
};

const ServiceSearch = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelGuests, setHotelGuests] = useState({
    adults: 2,
    childs: 1,
    rooms: 1,
  });
  const [checkInOut, setCheckInOut] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const [activeCategory, setActiveCategory] = useState("Hotel");

  const onCheckCheckoutChange = (newDates: Date[]) => {
    setCheckInOut(newDates);
  };

  const onGuestsChange = (newGuests: {
    adults: number;
    childs: number;
    rooms: number;
  }) => {
    setHotelGuests(newGuests);
  };

  const changeHotelLocation = (newLocation: string) => {
    setHotelLocation(newLocation);
  };

  const changeCategory = (newCategory: string) => {
    setActiveCategory(newCategory);
  };

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="serviceSearch" onSubmit={formSubmitHandler}>
        {/* <SearchCategories activeCategory={activeCategory} changeCategory={changeCategory} /> */}
        <form className="serviceSearch_form">
          <div className="serviceSearch_controller">
            <HotelLocation
              hotelLocation={hotelLocation}
              changeHotelLocation={changeHotelLocation}
            />
          </div>
          <div className="serviceSearch_controller">
            <h6 className="text-dark">Check in - Check out</h6>
            <CheckinCheckout onChange={onCheckCheckoutChange} />
          </div>
          <div className="serviceSearch_controller">
            <HotelGuests onChange={onGuestsChange} />
          </div>
          <button
            type="button"
            onClick={() => setFormIsShown(true)}
            className="serviceSearch_submitBtn"
          >
            <BiSearch />
            Search
          </button>
        </form>
      </div>
      <Modal
        isOpen={formIsShown}
        onRequestClose={() => setFormIsShown(false)}
        style={customStyles}
      >
        <ServiceRequestForm
          query={{
            ...hotelGuests,
            location: hotelLocation,
            dates: [
              checkInOut[0].toLocaleString(),
              checkInOut[1]?.toLocaleString(),
            ],
          }}
        />
      </Modal>
    </>
  );
};

export default ServiceSearch;
