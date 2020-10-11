import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingDetails = ({ book, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 ">
      <div className="card p-3">
        <div className="card-body text-center ">
          <h4 className="text-brand card-title">{book.title}</h4>
          <p>{book.time}</p>
          <small>{book.site} SPEACS AVAILABLE</small>
          <br />
          <button onClick={openModal} className=" btn btn-brand mt-3">
            BOOK APPOINTMENT
          </button>
        </div>
        <AppointmentForm
          modalIsOpen={modalIsOpen}
          appointmentOn={book}
          date={date}
          closeModal={closeModal}
        />
      </div>

      <br />
    </div>
  );
};

export default BookingDetails;
