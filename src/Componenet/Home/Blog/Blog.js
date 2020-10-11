import React from "react";
import Gulati from "../../../images/wilson.png";
import Ema from "../../../images/ema.png";
import Aliza from "../../../images/aliza.png";
import BlogsPost from "../BlogPost/BlogsPost";

const blogData = [
  {
    name: "Dr.Mashur Gulati",
    date: "23 April 2019",
    title: "2 times of brush in a Day can Keep you Healthy",
    img: Gulati,
  },
  {
    name: "Dr.Ema Saheb ",
    date: "23 April 2018",
    title: "The tooth Canser taken A challenge",
    img: Ema,
  },
  {
    name: "Dr.Muklesor Gulati",
    date: "24 April 2020",
    title: "2 times of brush in a Day can Keep you Healthy",
    img: Aliza,
  },
];
const Blog = () => {
  return (
    <section>
      <div className="mt-5 pt-5 pb-5 text-center ">
        <h6 style={{ color: "#1CC7C1" }}>OUR BLOG</h6>
        <h2 style={{ color: "#203047" }}>From Our Blog News</h2>
      </div>

      <div className=" d-flex justify-content-center">
        <div className=" row"></div>
        {blogData.map((bd) => (
          <BlogsPost bd={bd}></BlogsPost>
        ))}
      </div>
    </section>
  );
};

export default Blog;
