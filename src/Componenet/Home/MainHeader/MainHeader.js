import React from "react";
import chair from "../../../../images/chair.png";
const MainHeader = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <small className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          voluptas beatae, quae vel dolor non minima in magnam est animi soluta,
          ullam eos omnis. Deleniti architecto hic eius facilis quaerat.
        </small>
        <buttom className="btn btn-primary">GET APPOINTMENT</buttom>
      </div>
      <div className="col-md-6 p-5 ">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default MainHeader;
