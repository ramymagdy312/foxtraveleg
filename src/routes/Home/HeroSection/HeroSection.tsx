"use client";

import ServiceRequestForm from "@/src/components/ServiceRequestForm/ServiceRequestForm";
import ServiceSearch from "@/src/components/ServiceSearch/ServiceSearch";
import TravelFinder from "@/src/components/TravelFinder/TravelFinder";
import Modal from "@/src/components/common/Modal";
import Image from "next/image";
import React, { useState } from "react";

const HeroSection = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const onClose = () => setFormIsShown(false);

  return (
    <div className="homeHero">
      <div className="homeHero_bg">
        <Image fill src="/img/HomeHero.webp" alt="" />
      </div>

      <div className="featuredHeroBox">
        <img
          src="/img/logo.png"
          alt=""
          className="logo m-auto d-block"
          data-aos="fade-up"
        />
        <h1 className="heroTitle text-center" data-aos="fade-up">
          find next place to visit
        </h1>
        <p
          className="heroDescription text-warning"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover amazing places at execlusive deals.
        </p>
        <h4 className="text-center" data-aos="fade-up" data-aos-delay="200">
          Our website will be ready soon.
        </h4>
        <h6 className="text-center" data-aos="fade-up" data-aos-delay="300">
          You can contact us by telephone at{" "}
          <strong className="text-warning">+20 102 888 6661</strong> or by email
          at{" "}
          <strong className="text-warning">samarelkady@foxtraveleg.com</strong>
        </h6>

        <div>
          <ServiceSearch />
        </div>

        {/* <button
          className="btn btn-warning m-auto d-block"
          onClick={() => setFormIsShown(true)}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Contact Sales
        </button> */}
      </div>

      {/* {formIsShown && (
        <Modal onClose={onClose}>
          <ServiceRequestForm />
        </Modal>
      )} */}
    </div>
  );
};

export default HeroSection;
