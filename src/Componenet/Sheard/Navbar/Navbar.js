import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link mr-5" href="/home">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="/appointments">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5 text-white" href="/reviews">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5 text-white" href="/blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5 text-white" href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
