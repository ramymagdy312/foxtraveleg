// import InputWithBtn from "@/components/ui/InputWithBtn";
import { ITravelFinderFormState } from "../../TravelFinder_TYPES";
import InputFooter from "../InputFooter";
import InputHeader from "../InputHeader";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { searchCriteriaActions } from "@/src/redux/slices/searchCriteriaSlice";
import { ChangeEvent } from "react";

type props = {
  closeModal: () => void;
};

const PromocodeInput = (props: props) => {
  const code = useAppSelector((state) => state.searchCriteria.promocode);
  const dispatch = useAppDispatch();
  const { closeModal } = props;

  const confirmChoosen = (e: any) => {
    const value = e.target.value;
    dispatch(searchCriteriaActions.updatePromocode(value));
  };

  return (
    <div className="tf_input_form promocode">
      <InputHeader title="Enter Promocode" />

      <div className="tf_input_form-body">
        {/* <InputWithBtn placeHolder="Input you promocode" onChange={confirmChoosen} /> */}
      </div>

      <InputFooter closeModal={closeModal} confirmChoosen={() => {}} />
    </div>
  );
};

export default PromocodeInput;
