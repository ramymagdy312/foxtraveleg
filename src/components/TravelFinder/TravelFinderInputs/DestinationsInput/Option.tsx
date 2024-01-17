import React, { useEffect, useState } from "react";

const Option = (props: props) => {
  const { title, code, updateDestinations, className } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const index = props.choosenCodes.indexOf(code);
    setIsChecked(index !== -1);
  }, [props]);

  const changeHandler = () => {
    updateDestinations(code);
  };

  return (
    <div className={`form-check dest_option ${className}`}>
      <input
        className="form-check-input "
        type="checkbox"
        value=""
        onChange={changeHandler}
        checked={isChecked}
      />
      <label className="form-check-label">{title}</label>
    </div>
  );
};

export default Option;

// ==============================      types      ================================= //
type props = {
  updateDestinations: (newDestination: string) => void;
  title: string;
  code: string;
  choosenCodes: string[];
  className: string;
};
