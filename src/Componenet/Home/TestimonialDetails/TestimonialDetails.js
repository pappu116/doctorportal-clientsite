import React from "react";
import "./TestimonialDetails.css";
const TestimonialDetails = ({ rd }) => {
  return (
    <div className="col-md-3 border-style m-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta
        sint numquam id ipsum voluptatem quaerat nulla maxime, voluptatum
        accusantium odio magnam fugiat optio repudiandae debitis, vero iusto
        laudantium aperiam!
      </p>
      <div className="d-flex align-items-center mt-5">
        <img src={rd.img} alt="" />
        <div className="pl-3 text-center">
          <h6 style={{ color: "#1CC7C1" }}>{rd.name}</h6>
          <small>{rd.address}</small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
