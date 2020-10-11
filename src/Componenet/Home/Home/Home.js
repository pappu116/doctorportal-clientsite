import React from "react";
import Appointment from "../Appointment/Appointment";
import OurTerm from "../OurTarms/OurTerm";
import Service from "../Services/Service";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blog/Blog";
import Header from "./Header/Header";
import Doctors from "../Doctors/Doctors";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../../Sheard/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <OurTerm />
      <Appointment />
      <Testimonial />
      <Blog />
      <Doctors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
