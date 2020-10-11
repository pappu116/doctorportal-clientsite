import React, { useEffect, useState } from "react";
import AppointmentByDay from "../AppointmentByDay/AppointmentByDay";
import Sidbar from "../Sidbar/Sidbar";
import Calendar from "react-calendar";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100vh",
};

const Dashbord = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate.toDateString() }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);

  return (
    <section>
      <div style={containerStyle} className=" container-fluid row">
        <div className="col-md-2 bg-color">
          <Sidbar />
        </div>

        <div className="col-md-5">
          <h4 className="text-brand ">Appointments</h4>
          <Calendar
            className="calendar mt-5"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5 mt-5 ">
          <AppointmentByDay appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default Dashbord;
