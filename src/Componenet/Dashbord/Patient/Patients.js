import React, { useEffect, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";
import "./Patients.css";
const Patients = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="container-fluid row">
      <div className="col-md-2 bg-color">
        <Sidbar />
      </div>
      <div style={{ backgroundColor: "#F4FDFB" }} className="col-md-10">
        <h2>Patient</h2>

        <table className="table table-borderless tabel-style  ">
          <thead>
            <h5 className=" text-brand pl-3 pt-3 ">All Patient</h5>
          </thead>
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Date</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {appointments.map((ap, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{ap.PatientName}</td>
                <td>{ap.phone}</td>
                <td>{ap.gender}</td>
                <td>{ap.date}</td>
                <td>{ap.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Patients;
