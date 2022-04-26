import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4" id="contact">
                Get In Touch
              </h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/efim-klimov/"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/ravenesco"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://t.me/ravenesco"
              >
                <i className="fab fa-fw fa-telegram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="mailto:efim.klimov.95@gmail.com"
              >
                <i className="fab fa-fw fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Efim Klimov {new Date().getFullYear()}</small>
        </div>
      </div>
    </div>
  );
}
