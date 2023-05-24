import React from "react";
import people from "../../img/people.png";
import labal from "../../img/label.png";
import rupee from "../../img/rupee.png";
import wallet from "../../img/wallet.png";
import discount from "../../img/discount.png";
import { Link } from "react-router-dom";
const ReferBox = () => {
  return (
    <div>
      <div class="row  m-5">
        <h5>
          UI/UX{" "}
          <Link to="/refer" style={{ color: "#200845" }}>
            Refer & Design
          </Link>
        </h5>
        <div class="shadow-sm  br-5 col-sm-6 mb-3 mb-sm-0">
          <div class="card-body d-flex m-3 ">
            <div class="d-flex">
              <h5 class="card-title w-20 m-3">
                <p>Referal Earning</p>

                <h3>
                  <b>₹ 2,500</b>
                </h3>
              </h5>
              <h5 class="card-title  w-20 m-3">
                <p>Total Referrals</p>
                <h3>
                  <b>7</b>
                </h3>
              </h5>
              <h5 class="card-title  w-20 m-3 ">
                <h3>Wallet Ballance</h3>
                <h3>
                  <b>₹ 500</b>
                </h3>
              </h5>
            </div>
          </div>
          <div class="m-10">
            <div class="text-center mb-4">
              <button
                type="button"
                class="btn "
                style={{ backgroundColor: "#31113d", color: "#fff" }}
              >
                WithDraw Balance
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <h5>
            <b> Your Referal Code </b>
          </h5>
          <div class="card" style={{ borderColor: "red", color: "#200845" }}>
            <div class="card-body d-flex m-3 ">
              <div class="d-flex m-4"></div>
              <p class="m-3">
                <b>E</b>
              </p>
              <p class="m-3">
                <b>D</b>
              </p>
              <p class="m-3">
                <b>C</b>
              </p>
              <p class="m-3">
                <b>H</b>
              </p>
              <p class="m-3">
                <b>5</b>
              </p>
              <p class="m-3">
                <b>4</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row " style={{ marginLeft: "40px" }}>
        <div class="col-md-6 how-img d-flex">
          <div class="col-md-2 ">
            <img src={people} class="rounded-circle img-fluid " alt="" />
          </div>

          <div class="col-md-4 mb-2">
            <h4>Invite your friends</h4>
            <p class="text-muted">
              share the link tutedude.com with your freinds
            </p>
          </div>
        </div>
        <div class="col-md-6 how-img d-flex mb-2">
          <div class="col-md-2 ">
            <img src={labal} class="rounded-circle img-fluid " alt="" />
          </div>

          <div class="col-md-4 mb-2">
            <h4>Freind Purchases any course</h4>
            <p class="text-muted">
              Using your REFFRAL CODE in the payment page
            </p>
          </div>
        </div>
      </div>

      <div class="row " style={{ marginLeft: "30px" }}>
        <div class="col-md-6 how-img d-flex">
          <div class="col-md-2 ">
            <img src={rupee} class="rounded-circle img-fluid " alt="" />
          </div>

          <div class="col-md-4">
            <h4>You get ₹200 as referral money </h4>
            <p class="text-muted">
              On total purchase the freind makes,into your wallet
            </p>
          </div>
        </div>
        <div class="col-md-6 how-img d-flex">
          <div class="col-md-2 ">
            <img src={discount} class="rounded-circle img-fluid " alt="" />
          </div>

          <div class="col-md-4">
            <h4>Your Friend gets ₹200 off</h4>
            <p class="text-muted">
              On his overall free on successful purchase using your referral
              code
            </p>
          </div>
        </div>
      </div>

      <div class="row " style={{ marginLeft: "30px" }}>
        <div class="col-md-6 how-img d-flex">
          <div class="col-md-2 ">
            <img src={wallet} class="rounded-circle img-fluid " alt="" />
          </div>

          <div class="col-md-4">
            <h4>Transfer Money from Wallet</h4>
            <p class="text-muted">
              when the wallet balance reaches ₹200 or more, you can withdraw it
            </p>
          </div>
        </div>
        <div class="col-md-6 how-img d-flex"></div>
      </div>

      <div class="mb-5 mt-5" style={{ color: "#150c4d", marginLeft: "30px" }}>
        <h4>Freinds Who Enrolled</h4>
      </div>

      <div>
        <h4 style={{ color: "#150c4d", marginLeft: "30px" }}>
          Terms and Conditions
        </h4>
      </div>
    </div>
  );
};

export default ReferBox;
