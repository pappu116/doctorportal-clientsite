import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4">
      <img style={{ height: "50px" }} src={service.img} alt="" />
      <h5 className="pt-3">{service.name}</h5>
      <p style={{ color: "#B5B5B5" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        perspiciatis necessitatibus
      </p>
    </div>
  );
};

export default ServiceDetail;
