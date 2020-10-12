import React from "react";
import Gulati from "../../../images/wilson.png";
import Ema from "../../../images/ema.png";
import Aliza from "../../../images/aliza.png";
import "./Blogs.css";
import BlogsPost from "../BlogPost/BlogsPost";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: Gulati,
    date: "23 April 2019",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: Ema,
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: Aliza,
    date: "23 April 2019",
  },
];
const Blog = () => {
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 className="text-primary text-uppercase">our blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div className="card-deck mt-5">
          {blogData.map((blog) => (
            <BlogsPost blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
