import React from "react";
import "./Contactus.css";
const ContactUs = () => {
  return (
    <section>
      <div className="contact-bg">
        <div className="mt-5 pt-5 pb-5 text-center ">
          <h6 style={{ color: "#1CC7C1" }}>CONTACTUS</h6>
          <h2 style={{ color: "#FFF" }}>Always Connect with us</h2>
        </div>

        <form className=" text-center">
          <input
            className="control-from"
            type="email"
            name="email"
            id=""
            placeholder="Email Address*"
          />
          <br />
          <input
            className="control-from"
            type="text"
            name="subject"
            id=""
            placeholder="Subject*"
          />
          <br />
          <textarea
            className="control"
            name="object"
            id=""
            cols="30"
            rows="5"
            placeholder="Your Message*"
          ></textarea>
          <br />
          <button className="submit ">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
