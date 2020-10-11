import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "50%",
    padding: "80px",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "15px",
    transform: "translate(-50%, -50%)",
  },
};
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn.title;
    data.date = date.toDateString();
    data.createdDate = new Date();
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment completed successfully");
        }
      });
    console.log(data);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand text-center mb-5">{appointmentOn.title}</h2>
        <p>To {date.toDateString()}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select className="form-control" name="doctor" ref={register}>
            <option value="Doctor">Select Doctor</option>
            <option value="Dr.Mashur Gulati">Dr.Mashur Gulati</option>
            <option value="Dr.Nai Mama">Dr.Nai Mama</option>
            <option value="Dr.Vag Akhan thaika">Dr.Vag Akhan thaika</option>
            <option value="Dr.Chunga Cgu">Dr.Chunga Cgu</option>
          </select>

          <br />
          <input
            className="form-control"
            name="PatientName"
            ref={register({ required: true })}
            placeholder="Your Name"
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="form-control"
            name="phone"
            placeholder="Phone Number"
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <div className="d-flex">
            <input
              className="form-control"
              name="date"
              type="date"
              ref={register}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <select className="form-control" name="gender" ref={register}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
          <br />
          <input type="submit" className="btn-brand " value="Send" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
