import React from "react";
import "../enrolled/enrolled.css";

const Enrolled = () => {
  return (
    <div className="row  mt-2 mb-2 p-5">
      <div class="col-sm-6 mb-3 mb-sm-0 ">
        <h5>
          <b style={{ color: "#17184d" }}> Friends who enrolled (3)</b>
        </h5>
      </div>

      <div class="container text-center mt-4 mb-4 ">
        <div class="row justify-content-center">
          {/* first */}
          <div class="col-sm-4 rounded">
            <div
              class="card text-white  mb-3"
              style={{
                backgroundColor: " #342710",
              }}
            >
              <div class=" row card-header">
                <div class="col-sm-6">
                  <h2>Dhiraj Saxena</h2>
                </div>
                <div class="col-sm-6 mt-2 align-middle text-end">
                  <h6> 14 Sep 2022</h6>
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">Course Enrolled (6)</h5>

                <div class="row d-flex " style={{ flexDirection: "row" }}>
                  <div class="border m-3 text-center align-middle col-sm-3  p-2 rounded">
                    UI/UX
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    Photoshop
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    illustrator
                  </div>
                </div>
                <div class="row d-flex " style={{ flexDirection: "row" }}>
                  <div class="border m-3 align-middle text-center col-sm-3  p-2 rounded">
                    Python
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    Mern
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    java
                  </div>
                </div>

                <div class=" mt-3 text-start">
                  <h2>
                    Referral Amount <b>₹185</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* second */}
          <div class="col-sm-4 rounded">
            <div
              class="card text-white  mb-3"
              style={{
                backgroundColor: " #342710",
              }}
            >
              <div class=" row card-header">
                <div class="col-sm-8">
                  <h2>Subhash Mishra</h2>
                </div>
                <div class="col-sm-4 mt-2 align-middle text-end">
                  <h6> 15 Sep 2022</h6>
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">Course Enrolled (23)</h5>

                <div class="row d-flex " style={{ flexDirection: "row" }}>
                  <div class="border m-3 text-center align-middle col-sm-3  p-2 rounded">
                    UI/UX
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    Photoshop
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    illustrator
                  </div>
                </div>
                <div class="row d-flex " style={{ flexDirection: "row" }}>
                  <div class="border m-3 align-middle text-center col-sm-3  p-2 rounded">
                    Python
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    Mern
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    java
                  </div>
                </div>

                <div class=" mt-3 text-start">
                  <h2>
                    Referral Amount <b>₹185</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* third */}
          <div class="col-sm-4 rounded">
            <div
              class="card text-white  mb-3"
              style={{
                backgroundColor: " #342710",
              }}
            >
              <div class=" row card-header">
                <div class="col-sm-8">
                  <h2>Prafull Kumar</h2>
                </div>
                <div class="col-sm-4 mt-2 align-middle text-end">
                  <h6> 14 Sep 2022</h6>
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">Course Enrolled (23)</h5>

                <div class="row d-flex " style={{ flexDirection: "row" }}>
                  <div class="border m-3 text-center align-middle col-sm-3  p-2 rounded">
                    UI/UX
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    Photoshop
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    illustrator
                  </div>
                </div>
                <div class="row d-flex " style={{ flexDirection: "row" }}>
                  <div class="border m-3 align-middle text-center col-sm-3  p-2 rounded">
                    Python
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    Mern
                  </div>
                  <div class="border align-middle text-center m-3 col-sm-3 rounded">
                    java
                  </div>
                </div>

                <div class=" mt-3 text-start">
                  <h2>
                    Referral Amount <b>₹485</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ color: "#150c4d" }}>Terms and Conditions</h4>
      </div>
    </div>
  );
};

export default Enrolled;
