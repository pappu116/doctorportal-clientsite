import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useForm } from "react-hook-form";
import LoginBg from "../../images/Group 140.png";
import "./Login.css";
import firebaseConfig from "./firebase.config";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  //google login hdandel code is

  const googleHandelLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        console.log(signedInUser);

        // ...
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="row">
      <div className="col-md-6  d-flex justify-content-center align-items-center">
        <form className="form-area" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mb-5">Login</h2>
          <label htmlFor="userName">User Name</label>
          <br />
          <input
            className="form-style"
            name="userName"
            defaultValue="test"
            ref={register}
          />
          <br />
          <label htmlFor="password"> Password</label>
          <br />
          <input
            className="form-style"
            name="password"
            type="password"
            ref={register({ required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="btn-brand form-control"
            onClick={googleHandelLogin}
            type="submit"
          />
        </form>
      </div>
      <div className="col-md-6">
        <img
          src={LoginBg}
          style={{ height: "100vh" }}
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
