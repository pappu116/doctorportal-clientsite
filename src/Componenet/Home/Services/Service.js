import React from "react";
import Fluord from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Teath from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
const serviceData = [
  {
    name: "Fluoride Treatment",
    img: Fluord,
  },
  {
    name: "Cavity Felling",
    img: Cavity,
  },
  {
    name: "Teath Whitening",
    img: Teath,
  },
];
const Service = () => {
  return (
    <section className="text-center ">
      <div className="mt-5 pt-5 pb-5">
        <h6 style={{ color: "#1CC7C1" }}>OUR SERVICESS</h6>
        <h2 style={{ color: "#203047" }}>Services We Provide</h2>
      </div>

      <div className=" d-flex justify-content-center">
        <div className="w-75 row">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
