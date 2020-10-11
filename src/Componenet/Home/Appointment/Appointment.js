import React from "react";
import Doctor from "../../../images/doctor.png";
import "./Appoinment.css";
const Appointment = () => {
  return (
    <section className="mt-5 pt-5 mb-5 ">
      <div className="row appoinment-container ">
        <div className="col-md-5">
          <img src={Doctor} alt="" className="img-fluid" />
        </div>
        <div className="col-md-7 text-white mt-5">
          <h5 style={{ color: "#1CC7C1" }}>APPOINTMENT</h5>
          <h1>
            Make An Appointment <br />
            Today
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
            minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            consequuntur dolorum nostrum ex possimus eius voluptas sequi
            voluptatem, repellendus eum nam quidem ab velit, veniam eveniet
            doloremque facilis et est.
          </p>
          <button className=" btn-learn mt-5">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
