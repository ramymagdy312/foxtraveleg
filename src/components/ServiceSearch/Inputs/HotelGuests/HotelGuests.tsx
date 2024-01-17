import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const counters = [
  { name: "adults", defaultValue: 2 },
  { name: "childs", defaultValue: 1 },
  { name: "rooms", defaultValue: 1 },
];

type props = {
  onChange: (newGuests: { adults: number; childs: number; rooms: number }) => void;
};

const HotelGuests = (props: props) => {
  const [adults, setAdults] = useState<number>(2);
  const [childs, setChilds] = useState<number>(1);
  const [rooms, setRooms] = useState<number>(1);

  useEffect(() => {
    props.onChange({ adults, childs, rooms });
  }, [adults, childs, rooms]);

  const onCounterChange = (counterType: string, count: number) => {
    if (counterType === "adults") {
      setAdults(count);
    } else if (counterType === "childs") {
      setChilds(count);
    } else if (counterType === "rooms") {
      setRooms(count);
    }
  };

  return (
    <div className="guestInput_wrapper">
      <div data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        <h6 className="text-dark">Guest</h6>
        <div className="text-dark">
          <span>
            {adults} adults - {childs} children - {rooms} room
          </span>
        </div>
      </div>

      <div className="dropdown-menu">
        <div className="guestInput_counters">
          {counters.map((counter) => (
            <Counter
              key={counter.name}
              name={counter.name}
              defaultValue={counter.defaultValue}
              onCounterChange={onCounterChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Counter = ({ name, defaultValue, onCounterChange }: any) => {
  const [count, setCount] = useState(defaultValue);
  const incrementCount = () => {
    setCount(count + 1);
    onCounterChange(name, count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onCounterChange(name, count - 1);
    }
  };

  return (
    <>
      <div className="d-flex gap-3 justify-content-between align-items-center">
        <div>
          <div>{name}</div>
        </div>

        <div className="numberInput">
          <button onClick={decrementCount}>
            <BiMinus />
          </button>
          <div>
            <p className="count">{count}</p>
          </div>
          <button onClick={incrementCount}>
            <BiPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelGuests;
