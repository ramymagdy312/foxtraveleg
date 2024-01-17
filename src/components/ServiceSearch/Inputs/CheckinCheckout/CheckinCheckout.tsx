import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

type props = {
  onChange: (newDates: Date[]) => void;
};

const CheckinCheckout = (props: props) => {
  const [dates, setDates] = useState([new DateObject(), new DateObject()]);

  const onChangeHandler = (data: any) => {
    props.onChange([data[0].toDate(), data[1]?.toDate()]);
  };

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={onChangeHandler}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default CheckinCheckout;
