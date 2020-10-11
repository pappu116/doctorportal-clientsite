import React from "react";
import CardInfo from "./CardInfo/CardInfo";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const InfoData = [
  {
    title: "Opening Hours",
    description: "Lorem ipsum dolor sit amet consectetur,",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visite Our Locations",
    description: "Lorem ipsum dolor sit amet consectetur, ",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contact us now",
    description: "Lorem ipsum dolor sit amet consectetur,  ",
    icon: faPhone,
    background: "primary",
  },
];
const SerficeInfo = () => {
  return (
    <section className=" d-flex justify-content-center">
      <div className="w-75 row">
        {InfoData.map((info) => (
          <CardInfo info={info}></CardInfo>
        ))}
      </div>
    </section>
  );
};

export default SerficeInfo;
