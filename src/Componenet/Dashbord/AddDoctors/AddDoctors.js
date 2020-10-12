import React, { useState } from "react";
import Sidbar from "../Sidbar/Sidbar";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100vh",
};
const AddDoctors = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handelBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handelfileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handelSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("http://localhost:5000/addADoctors", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={containerStyle} className="container-fluid row ">
      <div className="col-md-2 bg-color">
        <Sidbar />
      </div>
      <div className="col-md-10">
        <h2>Add A Doctors</h2>
        <form onSubmit={handelSubmit}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              onBlur={handelBlur}
              type="email"
              class="form-control"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              onBlur={handelBlur}
              type="text"
              class="form-control"
              name="name"
            />
          </div>
          <div class="form-group form-check">
            <label for="file">Upload a image</label>
            <input
              onChange={handelfileChange}
              type="file"
              class="form-control"
              name="file"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
