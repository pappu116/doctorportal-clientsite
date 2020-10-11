import React, { useState } from "react";
import Footer from "../../Sheard/Footer/Footer";
import Navbar from "../../Sheard/Navbar/Navbar";
import AppointmentHeadder from "../AppoinmentHeader/AppointmentHeadder";
import BoookingAppointment from "../BookingAppointment/BoookingAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handelDateChanged = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar />
      <AppointmentHeadder handelDateChanged={handelDateChanged} />
      <BoookingAppointment date={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
