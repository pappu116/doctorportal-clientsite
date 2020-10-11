import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="row mt-5 p-5 ">
        <div className="col-md-3 ftstyle mt-5">
          <ul>
            <li>Emergency Dental Care</li>
            <li> Chock Up</li>
            <li>Treatment of Personal Discases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="col-md-3 ftstyle">
          <h4>Services</h4>
          <ul>
            <li>Emergency Dental Care</li>
            <li> Chock Up</li>
            <li>Treatment of Personal Discases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="col-md-3 ftstyle">
          <h4>Oral Health</h4>
          <ul>
            <li>Emergency Dental Care</li>
            <li> Chock Up</li>
            <li>Treatment of Personal Discases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="col-md-3 ftstyle">
          <h4>Our Address</h4>
          <p>
            New-York-101010 Hundson <br />
            Yards
          </p>
          <div className="d-flex">
            <p>
              <FontAwesomeIcon className="brand3" icon={faFacebookF} />
            </p>
            <p>
              <FontAwesomeIcon className="brand2" icon={faGooglePlusG} />
            </p>
            <p>
              <FontAwesomeIcon className="brand" icon={faTwitter} />
            </p>
          </div>
          <small>Call Now</small>
          <br />
          <button className=" number-btn ">+2025468546</button>
        </div>
      </div>
      <p className="text-center">
        {" "}
        Copyright {new Date().getFullYear()} All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
