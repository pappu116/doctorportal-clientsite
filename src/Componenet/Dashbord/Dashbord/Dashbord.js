import React, { useEffect, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";
import "./Dashbord.css";
import EditIcon from "@material-ui/icons/Edit";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100vh",
};
const Dashbord = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <container style={containerStyle} className="container-fluid row ">
      <div className="col-md-2 bg-color">
        <Sidbar />
      </div>
      <div className="col-md-10">
        <h4 className="pt-4">Dashboard </h4>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2  pending">
            <div className="d-flex">
              <h1 className="mr-3">09</h1>
              <p>
                Pending <br />
                Appointments
              </p>
            </div>
          </div>
          <div className="col-md-2 today ">
            <div className="d-flex">
              <h1 className="mr-3">09</h1>
              <p>
                Today's <br />
                Appointments
              </p>
            </div>
          </div>
          <div className="col-md-2  total">
            <div className="d-flex">
              <h1 className="mr-3">09</h1>
              <p>
                Total <br />
                Appointments
              </p>
            </div>
          </div>
          <div className="col-md-2   petient">
            <div className="d-flex">
              <h1 className="mr-3">09</h1>
              <p>
                Total <br />
                Patients
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10  ">
          <table
            style={{ margin: "10% 12%" }}
            className="table table-borderless tabel-style "
          >
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
                <th scope="col">Prescription</th>
                <th scope="col">Action</th>
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
                  <td>
                    <button className="btn-brand btn">Pending</button>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "#FFD076", color: "#fff" }}
                      className=" btn"
                    >
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </container>
  );
};

export default Dashbord;
