import React, { useState } from "react";

type props = {
  query: {
    adults: number;
    childs: number;
    rooms: number;
    location: string;
    dates: string[];
  };
};

const ServiceRequestForm = (props: props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nameChangeHandler = (e: any) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e: any) => {
    setMessage(e.target.value);
  };
  const phoneNumberChangeHandler = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phoneNumber,
          message: message,
          adults: props.query.adults,
          childs: props.query.childs,
          rooms: props.query.rooms,
          location: props.query.location,
          checkin: props.query.dates[0],
          checkout: props.query.dates[1],
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Your name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="type your name"
          onChange={nameChangeHandler}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Your email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={emailChangeHandler}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Your phone number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter your phone number"
          onChange={phoneNumberChangeHandler}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Leave a message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows={3}
          placeholder="Describe your needs"
          onChange={messageChangeHandler}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-warning">
        Submit
      </button>
    </form>
  );
};

export default ServiceRequestForm;
