import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <header className="masthead page404">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center mt-5">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase text-white">
                Page Not Found
              </h1>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <h2 className="text-white mx-auto mb-5">
                But Here's a Cute Panda to Comfort Your Suffering
              </h2>
              <img
                className="mx-auto px-auto mt-5 pt-5 w-75"
                src={require("../assets/img/panda.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
