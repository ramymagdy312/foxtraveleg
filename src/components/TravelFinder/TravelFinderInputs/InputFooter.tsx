import React from "react";

type props = {
  closeModal: () => void;
  confirmChoosen: () => void;
};

const InputFooter = (props: props) => {
  const { closeModal, confirmChoosen } = props;

  const cancelHandler = () => {
    closeModal();
  };

  const okHandler = () => {
    confirmChoosen();
    closeModal();
  };

  return (
    <div className="tf_input_form-footer">
      <button aria-label="cancel" onClick={cancelHandler}>
        Cancel
      </button>
      <button aria-label="ok" onClick={okHandler}>
        OK
      </button>
    </div>
  );
};

export default InputFooter;
