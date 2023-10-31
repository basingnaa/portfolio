import "./assets/css/locomotive-scroll.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useRef } from "react";
import cv from "./images/My-CV.pdf";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <nav ref={navRef}>
            <Link to="#home" smooth>
              Home
            </Link>

            <Link to="#about-me" smooth>
              About
            </Link>

            <Link to="#projects" smooth>
              Projects
            </Link>

            {/* <a href="/#">Contact</a> */}

            <div className="resume">
              <a href={cv} target="_blank" rel="noopener noreferrer">
                Resume/CV
              </a>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>

        <div className="home" id="home">
          <div className="sec">
            <div className="profile">
              <div className="profile-text">
                <div>
                  <h1>Software and React Front-end Developer</h1>
                  <p>
                    Hi, I'm Anthony Basingnaa. A passionate software developer
                    based in Accra, Ghana
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/anthony-basingnaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedIn"
                    src={require("./images/LinkedIn_logo_initials.png")}
                    alt=""
                  ></img>
                </a>
              </div>
              <div className="profile-picture">
                <img
                  src={require("./images/photo_2022-09-21_12-08-32.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
            <div
              className="stack"
              data-scroll-speed="-1"
              data-scroll-direction="horizontal"
            >
              <p>My Stack |</p>
              <img
                src={require("./images/800px-HTML5_Badge.svg.png")}
                alt=""
              ></img>
              <img src={require("./images/CSS3_logo.svg.png")} alt=""></img>
              <img src={require("./images/JavaScript-logo.png")} alt=""></img>
              <img src={require("./images/React-icon.svg.png")} alt=""></img>
              <img src={require("./images/nodejs-1-logo.png")} alt=""></img>
              <img
                src={require("./images/5847f40ecef1014c0b5e488a.png")}
                alt=""
              ></img>
              <img
                src={require("./images/mysql-logo-png-transparent.png")}
                alt=""
              ></img>
              <img src={require("./images/Figma-1-logo.png")} alt=""></img>
            </div>
          </div>
        </div>

        <div className="about-me" id="about-me">
          <div className="ab-sec">
            <div
              className="about-me-img"
              data-scroll-speed="1"
              data-scroll-direction="horizontal"
            >
              <img
                src={require("./images/asher-mitilinakis-desk-setup-01-1.jpg")}
                alt=""
              ></img>
            </div>

            <div
              className="about-me-text"
              data-scroll-speed="-1"
              data-scroll-direction="horizontal"
            >
              <h1>About Me</h1>
              <p>
                As a Junior Developer, I have acquired skills in HTML, CSS,
                JavaScript, React and Node JS, to enable me build fully
                responsive web applications. I am capable of developing Rest
                APIs using Node, specifically Express JS, and building
                responsive user interfaces to interact with them seamlessly
                using React. I am a team player and capable of collaborating
                with others, whether in-person or remotely.
              </p>
            </div>
          </div>
        </div>

        <div className="projects" id="projects">
          <h1 className="main-heading">Relevant Projects</h1>

          <div className="project">
            <div className="project-img">
              <img
                src={require("./images/tups.png")}
                alt=""
              />
            </div>

            <div className="project-text">
              <h1>TUPs Delivery Service</h1>

              <p>
                A delivery management application that enables users to create,
                and manage deliveries, packages, riders, institutions as well as
                administrators and their level of access. It also makes use of
                the Google Maps API in order to record the locations of the
                deliveries.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <img src={require("./images/UMB-Rate-App-ss.PNG")} alt="" />
            </div>

            <div className="project-text">
              <h1>UMB Rate Board App</h1>

              <p>
                An application that displays foreign exchange rates obtained
                from reading a csv file and saving the information to a
                database. It also displays images from the marketing department
                of the bank that relays information to the bank’s customers.
                There are different levels of administrative users which have
                varying levels of authorization within the application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
