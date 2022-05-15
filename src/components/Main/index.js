import React, { Component } from "react";
import MainTeam from "./MainTeam";
import MainServices from "./MainServices";
import MainWork from "./MainWork";
import ContactForm from "./ContactForm";
import MainClients from "./MainClients";

import "./main.css";
import "./m.main.css";

class Main extends Component {
  render() {
    return (
      <main>
        {/* main_welcome */}
        <section className="main_welcome">
          <h1>
            WELCOME ON <span className="mycompany">MYCOMPANY</span>
          </h1>
          <p>
            We are a digital agency with <span className="bolderText">years of experience</span> and with{" "}
            <span className="bolderText">extraordinary people</span>
          </p>
        </section>

        {/* main_about */}
        <section id="about" className="wrapper">
          <div className="main_about">
            <div className="about_left">
              <img className="mv-100" src="./img/mac.png" alt="mac" />
            </div>
            <div className="about_right">
              <h1 className="upperCase">
                Some words <span className="bolderText">about us</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad
                eaque maxime possimus .
              </p>
              <ul>
                <li>
                  <span className="bolderText">Mission - </span>
                  <span className="liText">We deliver uniqueness and quality</span>
                </li>
                <li>
                  <span className="bolderText">Skills - </span>
                  <span className="liText">Delivering fast and excellent results</span>
                </li>
                <li>
                  <span className="bolderText">Clients - </span>
                  <span className="liText">Satisfied clients thanks to our experience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <MainTeam />

        <MainServices />

        <MainClients />

        <MainWork />

        {/* main_testimonials */}
        <section id="main_testimonials" className="main_testimonials">
          <div className="wrapper">
            <h1 className="upperCase">our clients’ testimonials</h1>
            <p className="upperCase">
              This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>Dean Martin, CEO Acme Inc.</p>
          </div>
        </section>

        <ContactForm />
      </main>
    );
  }
}

export default Main;
