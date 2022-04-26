import React from "react";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center mt-5">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase text-white">
              Efim Klimov
            </h1>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              Full-stack Web Developer - Bot Developer
            </h2>
            <a className="btn btn-primary" href="#portfolio">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
