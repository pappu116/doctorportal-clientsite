import React from "react";
import Quted from "../../../images/quote.png";
import "./Testimonial.css";
import Watson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import Herry from "../../../images/aliza.png";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";
const rivewData = [
  {
    name: "Winson herry",
    address: "California",
    img: Watson,
  },
  {
    name: "Ema Herry",
    address: "California",
    img: ema,
  },
  {
    name: "Aliza",
    address: "California",
    img: Herry,
  },
];
const Testimonial = () => {
  return (
    <section>
      <div className=" d-flex justify-content-center">
        <div className="row testimonial-title w-75 ">
          <div className="col-md-7 ">
            <h6 className="text-uppercase" style={{ color: "#1CC7C1" }}>
              testimonial
            </h6>
            <h1>
              What's our Patients <br />
              Says
            </h1>
          </div>
          <div className="col-md-5">
            <img src={Quted} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {rivewData.map((rd) => (
          <TestimonialDetails rd={rd}></TestimonialDetails>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
