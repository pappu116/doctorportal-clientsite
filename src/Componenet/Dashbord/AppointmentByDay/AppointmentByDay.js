import React from "react";
import Appointmentlist from "../Appointmentlist/Appointmentlist";
const backgroundStyle = {
  backgroundColor: "#fff",
  minHeight: "500px",
};
const AppointmentByDay = ({ appointments }) => {
  return (
    <div style={backgroundStyle} className="text-center">
      <h2 className="text-brand">Appointment </h2>
      {appointments.length ? (
        <Appointmentlist appointments={appointments} />
      ) : (
        <h2 style={{ color: "gray" }}>No Appoinment Data</h2>
      )}
    </div>
  );
};

export default AppointmentByDay;
