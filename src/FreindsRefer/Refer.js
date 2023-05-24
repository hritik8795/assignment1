import React from "react";
import Navbar from "../components/navbar/Navbar";
import Enrolled from "../components/enrolled/Enrolled";
import { Link } from "react-router-dom";

const Refer = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 mb-3" style={{ marginLeft: "30px" }}>
        <h3 style={{ color: "#200845" }}>
          UI/UX{" "}
          <Link to="/" style={{ color: "#200845" }}>
            Home
          </Link>{" "}
          /<a>Freinds Refered</a>
        </h3>
      </div>

      <div className="row  mt-5 mb-2 p-5">
        <h5>
          <b> Your Referal Code </b>
        </h5>
        <div class="row ">
          <div class="col-sm-6">
            <div class="card " style={{ borderColor: "red", color: "#200845" }}>
              <div class="card-body text-center d-flex m-3 ">
                <div class="d-flex ">
                  <p class="m-2">
                    <b>E</b>
                  </p>
                  <p class="m-2">
                    <b>D</b>
                  </p>
                  <p class="m-2">
                    <b>C</b>
                  </p>
                  <p class="m-2">
                    <b>H</b>
                  </p>
                  <p class="m-2">
                    <b>5</b>
                  </p>
                  <p class="m-2">
                    <b>4</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4"></div>

          <div class="col-sm-2">
            <div class="card shadow mt-4 ">
              <b class="text-center   mt-3 mb-2" style={{ color: "#200845" }}>
                Wallet Balance
              </b>
              <h2 class="text-center">
                <b>₹500</b>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Enrolled />
    </div>
  );
};

export default Refer;
