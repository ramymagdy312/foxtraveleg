import React from "react";

type props = {
  title: string;
};

const InputHeader = (props: props) => {
  return (
    <div className="tf_input_form-header">
      <p className="title">{props.title}</p>
    </div>
  );
};

export default InputHeader;
