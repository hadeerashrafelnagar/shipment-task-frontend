import React from "react";

const Testimonials = () => {
  return (
    <>
      {/* feedback section */}

      <section className="testimonials sec-padding" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2
                data-title="testimonials"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                FeedBack From Our Clients
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="test-item"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="test-author">
                <div className="test-author-name">
                  <h3>dima david</h3>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div
              className="test-item"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="test-author">
                <div className="test-author-name">
                  <h3>raj himachal</h3>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div
              className="test-item"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="test-author">
                <div className="test-author-name">
                  <h3>lucy milano</h3>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* feedback section */}
       {/* footer section */}

       <footer className="footer" id="contact">
        <div className="container">
          <div className="row">
            <div
              className="footer-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3>our location</h3>
              <p>xyz street, sector-12, new delhi - 000 ***</p>
            </div>
            <div
              className="footer-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3>opening hours</h3>
              <p>monday to sunday 9:00 AM - 10:00 PM</p>
            </div>
            <div
              className="footer-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3>contact us</h3>
              <p>91 9654 293 ***</p>
              <p>ShiPMentsinfo@gmail.com</p>
            </div>
            <div
              className="footer-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h3>why us?</h3>
              <p>Secure Services</p>
              <p>Secure Warehouseing</p>
              <p>Cost savings</p>
              <p>Proven by great companies</p>
            </div>
            <div
              className="footer-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>ShiPMents</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="copyright">&copy; 2022</div>
        </div>
      </footer>
      {/* footer section */}
    </>
  );
};
export default Testimonials;
