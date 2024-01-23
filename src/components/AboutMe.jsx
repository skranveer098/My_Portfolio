import React from "react";
import LeftScroll from "./LeftScroll.jsx";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

import "./AboutMe.css";
// import zIndex from '@mui/material/styles/zIndex.js';

const AboutMe = () => {
  return (
    <div className="flexabout">
      <div className="contained">
        <h1 style={{ color: "black" }}>About Me</h1>
        <div className="containabout">
          <LeftScroll></LeftScroll>
          <div className="leftSocial">
            <footer className="wrapper">
              <div className="icons facebook">
                <div className="tooltip">Github</div>
                <span>
                  {" "}
                  <i className="fab fa-facebook">
                    <FaGithubAlt />
                  </i>
                </span>
              </div>

              <div className="icons instagram">
                <div className="tooltip">Instagram</div>
                <span>
                  {" "}
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </span>
              </div>

              <div className="icons twitter">
                <div className="tooltip">Gmail</div>
                <span>
                  {" "}
                  <i className="fab fa-twitter">
                    <SiGmail />
                  </i>
                </span>
              </div>

              <div className="icons youtube">
                <div className="tooltip">Phone</div>
                <span>
                  {" "}
                  <i className="fab fa-youtube">
                    <IoCall />
                  </i>
                </span>
              </div>
            </footer>
          </div>

          <div id="para">
            <p style={{ color: "black", textAlign: "left" }}>
              Dedicated web developer, C++ coder, and tech enthusiast driven by
              a passion for cutting‑edge technologies. Proficient in front‑end
              development, with expertise in HTML, CSS, JavaScript, C++, and
              Java. Strong leadership skills and a keen eye for detail.
              Committed to crafting efficient, scalable solutions that elevate
              user experiences and contribute for the betterment of the society
              and association.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Name:</strong> <span>Ranveer Singh</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+917905864355</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Tatanagar, Jharkhand</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>21</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>GMail:</strong>{" "}
                    <span>ranveersinghsingh2644@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pic">
            <img src="https://i.pinimg.com/474x/92/db/5b/92db5bb4f929fd6777c2a449b63a5e3a.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
