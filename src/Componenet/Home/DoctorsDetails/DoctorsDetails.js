import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DoctorsDetails = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <img src={doctor.img} alt="" className="img-fluid mb-3" />
      <h4>{doctor.name}</h4>
      <p>
        <FontAwesomeIcon style={{ color: "#1CC7C1" }} icon={faPhone} />
        <span>{doctor.phone}</span>
      </p>
    </div>
  );
};

export default DoctorsDetails;
