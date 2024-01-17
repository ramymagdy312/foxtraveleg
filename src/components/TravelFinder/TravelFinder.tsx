"use client";
import { useRouter } from "next/navigation";
import Dates from "./TravelFinderForm/Dates";
import Destinations from "./TravelFinderForm/Destinations";
import Promocode from "./TravelFinderForm/Promocode";
import SearchBtn from "./TravelFinderForm/SearchBtn";
import Travellers from "./TravelFinderForm/Travellers";
import { useAppDispatch } from "@/src/redux/store";

const TravelFinder = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <form className="travel_finder" onSubmit={submitHandler}>
      <Destinations />
      <Dates />
      <Travellers />
      <Promocode />
      <SearchBtn />
    </form>
  );
};

export default TravelFinder;
