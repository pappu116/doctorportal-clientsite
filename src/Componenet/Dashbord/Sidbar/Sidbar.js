import React from "react";
import "./Sidebar.css";
import GridOnIcon from "@material-ui/icons/GridOn";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PeopleIcon from "@material-ui/icons/People";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const Sidbar = () => {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <a href="/dashbord">
            <GridOnIcon />
            <span> DashBord</span>
          </a>
        </li>
        <li>
          <a href="/appointments">
            <CalendarTodayIcon />
            <span>Appointments</span>
          </a>
        </li>
        <li>
          <a href="/patients">
            <PeopleIcon />
            <span>Patients</span>
          </a>
        </li>
        <li>
          <a href="/prescription">
            <NoteAddIcon />
            <span>Prescription</span>
          </a>
        </li>
        <li>
          <a href="">
            <SettingsIcon />
            <span>Settings</span>
          </a>
        </li>
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
