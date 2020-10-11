import React from "react";
import chair from "../../../images/chair.png";
import "./Appointmentheader.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AppointmentHeadder = ({ handelDateChanged }) => {
  return (
    <main className="row d-flex align-items-center appoin-area">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <Calendar
          className="calendar mt-5"
          onChange={handelDateChanged}
          value={new Date()}
        />
      </div>
      <div className="col-md-6 p-5 ">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeadder;
