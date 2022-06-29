import React from "react";
import aboutus from "../images/photo-1446694292248-2c2a7e575b1b.jpeg";

const AboutUs = () => {
  return (
    <>
      {/* about section */}

      <section className="about sec-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2
                data-title="our story"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                about us
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="about-text"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>
                welcome to SH<span className="logo">i</span>PM
                <span className="logo">ents</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className="about-img"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="img-box">
                <h3>20+ years experience</h3>
                <img src={aboutus} alt="about img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}

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
export default AboutUs;
