import React from "react";

const Projects = (props) => {
  const renderItems = () => {
    return props.projectList.map((item) => (
      <div className="col-md-6 col-lg-4 mb-5" key={item.id}>
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target={"#portfolioModal" + item.id}
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img
            className="img-fluid"
            src={require("../assets/img/" + item.image_thumbnail)}
            alt="..."
          />
        </div>
      </div>
    ));
  };

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">{renderItems()}</div>
      </div>
    </section>
  );
};

export default Projects;
