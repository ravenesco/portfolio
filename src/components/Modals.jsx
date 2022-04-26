import React from "react";

const Modals = (props) => {
  return props.projectList.map((item) => (
    <div
      className="portfolio-modal modal fade"
      id={"portfolioModal" + item.id}
      tabIndex="-1"
      aria-labelledby={"portfolioModal" + item.id}
      aria-hidden="true"
      key={item.id}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* Portfolio Modal - Title */}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {item.title}
                  </h2>

                  {/* Icon Divider */}
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  {/* Portfolio Modal - Image */}
                  <img
                    className="img-fluid rounded mb-5"
                    src={require("../assets/img/" + item.image)}
                    alt="..."
                  />
                  {/* Portfolio Modal - Text */}
                  <p className="mb-6 lead text-muted">
                    <span className="font-weight-bold">Technologies:</span>
                    {" " + item.technology}
                  </p>
                  <p className="mb-12">{item.description}</p>
                  {item.link && (
                    <p className="font-weight-bold">
                      <a className="link-primary" href={item.link}>
                        Try it YOURSELF
                      </a>
                    </p>
                  )}
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    <i className="fas fa-xmark fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Modals;
