import React from "react";
import BookingDetails from "../BookingDetails/BookingDetails";

const bookingData = [
  {
    title: "Teeth Orthodontics",
    time: "8:00 Am - 9:00 Am",
    site: 10,
    id: 1,
  },
  {
    title: "Cosmetics Dentistry",
    time: "10:00 Am - 11:30 Am",
    site: 10,
    id: 1,
  },
  {
    title: "Teeth Cleaning",
    time: "5:00 Am - 6:00 Am",
    site: 10,
    id: 1,
  },
  {
    title: "Cavity Protection",
    time: "7:00 Am - 8:30 Am",
    site: 10,
    id: 1,
  },
  {
    title: "Teeth Orthodontics",
    time: "8:00 Am - 9:00 Am",
    site: "10 SPEACS AVAILABLE",
    id: 1,
  },
  {
    title: "Teeth Orthodontics",
    time: "8:00 Am - 9:00 Am",
    site: 10,
    id: 1,
  },
];

const BoookingAppointment = ({ date }) => {
  return (
    <section>
      <h1 className="text-center p-5 text-brand">
        Available Appointments on {date.toDateString()}
      </h1>
      <div className="row ml-0 mr-0">
        {bookingData.map((book) => (
          <BookingDetails date={date} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BoookingAppointment;
