import React, { useEffect, useRef, useState } from "react";
import TravelFinder from "./TravelFinder";

const TravelFinderSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [wrapperBottom, setWrapperBottom] = useState<undefined | number>();
  const [divHeight, setDivHeight] = useState<number>(0);
  const prevScrollY = useRef<number>(0);
  const componentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topOfWindow = window.scrollY;

    if (componentRef && componentRef.current && wrapperRef && wrapperRef.current) {
      const componentReact = componentRef.current.getBoundingClientRect();
      const wrapperReact = wrapperRef.current.getBoundingClientRect();
      setWrapperBottom(wrapperReact.bottom + topOfWindow);
      setDivHeight(componentReact.height);
    }
  }, [componentRef, wrapperRef, window]);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current && wrapperBottom) {
        const topOfWindow = window.scrollY;

        const scrollDirection = topOfWindow > prevScrollY.current ? "down" : "up";
        prevScrollY.current = topOfWindow;

        const boundingRect = componentRef.current.getBoundingClientRect();
        if (scrollDirection === "down") {
          setIsSticky(boundingRect.top <= 0);
        } else if (scrollDirection === "up") {
          setIsSticky(topOfWindow > wrapperBottom);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [componentRef, wrapperBottom]);

  return (
    <div ref={wrapperRef}>
      <div ref={componentRef} className={`travel_finder_wrapper ${isSticky ? "sticky" : ""}`}>
        <TravelFinder />
      </div>
      {isSticky && <div className="travel_finder_placeholder" style={{ height: divHeight }} />}
    </div>
  );
};

export default TravelFinderSticky;
