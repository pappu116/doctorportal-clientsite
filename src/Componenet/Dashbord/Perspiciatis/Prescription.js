import React, { useEffect, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";

const Perspiciatis = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="row container-fluid">
      <div className="col-md-2 bg-color">
        <Sidbar />
      </div>
      <div className="col-md-10">
        <div style={{ backgroundColor: "#F4FDFB" }}>
          <h5>Prescription</h5>
          <table className="table table-borderless tabel-style">
            <thead>
              <h3 className=" text-brand pl-3 pt-3 ">All Prescription</h3>
            </thead>
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
                <th scope="col">Prescription</th>
              </tr>
            </thead>
            <br />
            {appointments.map((ap, index) => (
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{ap.PatientName}</td>
                  <td>{ap.phone}</td>
                  <td>{ap.date}</td>
                  <td>
                    <button className="btn-brand btn">View</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Perspiciatis;
