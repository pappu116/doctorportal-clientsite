import React from "react";
import "./Appointmentlist.css";
const Appointmentlist = ({ appointments }) => {
  return (
    <tabel>
      <tr>
        <th>PatientName</th>
        <th>Phone Number</th>
        <th>Gender</th>
        <th>Action</th>
      </tr>
      {appointments.map((ap) => (
        <tr>
          <td>{ap.PatientName}</td>
          <td>{ap.phone}</td>
          <td>{ap.gender}</td>
          <select className="form-control btn-brand" name="doctor">
            <option value="Not visited">Not visited</option>
            <option value="visited">visited</option>
            <option value="Dr.Nai Mama">Aproved</option>
          </select>
        </tr>
      ))}
    </tabel>
  );
};

export default Appointmentlist;
