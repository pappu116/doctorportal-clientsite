import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import GridOnIcon from "@material-ui/icons/GridOn";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PeopleIcon from "@material-ui/icons/People";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Add } from "@material-ui/icons";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
const Sidbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, []);

  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/dashbord">
            <GridOnIcon />
            <span> DashBord</span>
          </Link>
        </li>
        <li>
          <Link to="/prescription">
            <NoteAddIcon />
            <span>Prescription</span>
          </Link>
        </li>
        {isDoctor && (
          <div>
            <li>
              <Link to="/appointments">
                <CalendarTodayIcon />
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link to="/patients">
                <PeopleIcon />
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/adddoctors">
                <Add />
                <span>AddDoctors</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <SettingsIcon />
                <span>Settings</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <a className="btn text-white mt-5 pt-5" href="">
        <ExitToAppIcon />
        <span>
          <b>Log Out</b>
        </span>
      </a>
    </div>
  );
};

export default Sidbar;
