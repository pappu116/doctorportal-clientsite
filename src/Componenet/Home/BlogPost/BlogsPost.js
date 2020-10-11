import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./blogPost.css";
const BlogsPost = ({ bd }) => {
  return (
    <div className="col-md-3 blogpost   m-3">
      <div>
        <div className="d-flex mb-3">
          <img src={bd.img} alt="" className="img-fluid" />
          <div className="pl-3 k">
            <h6>{bd.name}</h6>
            <small>{bd.date}</small>
          </div>
        </div>
        <h4>{bd.title}</h4>

        <small className="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          repellendus quam, fuga quidem repudiandae veritatis dolor quis ipsam
          culpa animi rerum molestiae voluptates, accusamus consequatur autem
          odio ipsum, ullam explicabo.
        </small>
        <FontAwesomeIcon className="icon" icon={faLongArrowAltRight} />
      </div>
    </div>
  );
};

export default BlogsPost;
