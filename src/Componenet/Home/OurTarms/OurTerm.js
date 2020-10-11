import React from "react";
import child from "../../../images/Mask Group 3.png";
const OurTerm = () => {
  return (
    <section className=" d-flex justify-content-center mt-5 pt-5  pb-5">
      <div className="row w-75 align-items-center">
        <div className="col-md-5">
          <img height="400px" src={child} alt="" className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h1 className="mb-5">
            Exeptional Dental <br /> Care, On Your Term
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse fuga
            ullam explicabo recusandae voluptate odio nostrum sit quibusdam
            sequi animi architecto inventore labore, molestiae nobis quo nihil
            aspernatur dolores numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium praesentium facere vel dolorem iure
            possimus quas ea perferendis, laborum aperiam ipsam animi sed?
            Veritatis fuga, omnis earum corrupti aspernatur odit?
          </p>
          <button className="btn-learn mt-5">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default OurTerm;
