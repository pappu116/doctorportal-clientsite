import React from "react";
import Doctor from "../../../images/doctor-sm.png";
import DoctorsDetails from "../DoctorsDetails/DoctorsDetails";
const doctorsData = [
  {
    name: "kruitser",
    phone: "+69856489548",
    img: Doctor,
  },
  {
    name: "kruitser",
    phone: "+69856489548",
    img: Doctor,
  },
  {
    name: "kruitser",
    phone: "+69856489548",
    img: Doctor,
  },
];
const Doctors = () => {
  return (
    <section>
      <div className="mt-5 pt-5 pb-5 text-center ">
        <h6 style={{ color: "#1CC7C1" }}>Our Doctors</h6>
      </div>

      <div className=" d-flex justify-content-center">
        <div className=" row w-75"></div>
        {doctorsData.map((doctor) => (
          <DoctorsDetails doctor={doctor}></DoctorsDetails>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
