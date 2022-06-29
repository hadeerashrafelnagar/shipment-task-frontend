import React from "react";
import { Link } from "react-router-dom";

import aboutus from "../images/photo-1446694292248-2c2a7e575b1b.jpeg";

const Home = () => {
  return (
    <>
      {/* header section */}
      <section className="home" id="home">
        <div className="home-bg"></div>
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div
              className="home-text"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>TRANSPORTATIONS</h1>
              <h1>&</h1>
              <h1>LOGISTICS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* header section */}

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
              <Link to="/signin">
                <button className="button is-link">Sign In</button>
              </Link>
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

export default Home;
