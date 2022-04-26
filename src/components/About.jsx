import React from "react";

export default function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About Me
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-12 ms-auto">
            <p className="lead">
              Hi, my name is Efim. I'm a Computer Science student with 5 years
              of software development experience currently specializing in{" "}
              <span className="text-warning">Python automation</span>. I have
              worked on desktop and web applications, for{" "}
              <span className="text-warning">Windows</span> and{" "}
              <span className="text-warning">Linux</span>. I have strong
              knowledge of <span className="text-warning">Python 3</span>,{" "}
              <span className="text-warning">Django</span>,{" "}
              <span className="text-warning">ES6 JavaScript</span>,{" "}
              <span className="text-warning">ReactJS</span>, and{" "}
              <span className="text-warning">
                objective-oriented principles
              </span>
              . Throughout my career, I have worked on projects related to
              automation, bot development, web applications, Autonomous Drive,
              and image processing and computer vision.
            </p>

            <p className="lead">
              Bot development and automation take up a fair share of my recent
              interests. I primarily use{" "}
              <span className="text-warning">Python</span> with{" "}
              <span className="text-warning">Django</span> framework to build
              and optimize the performance of online applications and automation
              scripts.
            </p>

            <p className="lead">
              That being said, clear and consistent communication with customers
              means a lot for me to provide a fluent and joyful experience to
              you as best I can.
            </p>

            <p className="lead">What I offer:</p>

            <ul>
              <li>
                Creating, setting up, and tweaking bots (e.g. for Telegram,
                Instagram)
              </li>
              <li>Automating manual tasks</li>
              <li>Building responsive and functional websites</li>
              <li>Front-end web development</li>
              <li>Back-end web development</li>
              <li>Database setup</li>
              <li>
                Developing and connecting diverse{" "}
                <span className="text-warning">REST APIs</span>
              </li>
              <li>
                Experience with version control software:{" "}
                <span className="text-warning">Git</span>
              </li>
              <li>
                Experience with desktop versions of{" "}
                <span className="text-warning">Windows</span> and{" "}
                <span className="text-warning">Linux</span>
              </li>
            </ul>

            <p className="lead">Looking forward to working with you.</p>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          A Little More About Me
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-12 ms-auto">
            <p className="lead">
              When I'm not at my desk, I'm a pretty active person who spends the
              majority of my time outside. I like a variety of sports, including
              biking, climbing, and urban exploration. Since childhood, hiking
              and any time spent actively in nature have been a favorite pastime
              of mine.
            </p>
            <p className="lead">
              I'm no stranger to video games either, and I cherish every moment
              spent online with my friends which allows us to keep connected
              while living in different parts of the world.
            </p>
            <p className="lead">
              Finally, during the rest of my free time, you will probably find
              me breaking stuff like mobile firmware and operating systems (it's
              a lot of fun to do, promise).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
