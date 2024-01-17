import { ReactNode } from "react";

type props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = (props: props) => {
  const { children } = props;

  const onClose = () => {
    props.onClose();
  };

  return (
    <div className="modalBackground" onClick={() => onClose()}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
