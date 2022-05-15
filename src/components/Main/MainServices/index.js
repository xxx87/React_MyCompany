import React, { Component } from "react";

import "./mainServices.css";

class MainServices extends Component {
  render() {
    return (
      <section id="main_services" className="main_services">
        <div className="wrapper">
          <h1>OUR SERVICES</h1>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque
              maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit
              excepturi porro ipsa tenetur.
            </i>
          </p>

          <div className="services_cards">
            <div className="services_card">
              <img src="./img/web_design.png" alt="web design" />
              <h4>WEB DESIGN</h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="services_card">
              <img src="./img/mob_apps.png" alt="mobile apps" />
              <h4>MOBILE APPS</h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="services_card">
              <img src="./img/photog.png" alt="photography" />
              <h4>PHOTOGRAPHY</h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            <div className="services_card">
              <img src="./img/marketing.png" alt="marketing" />
              <h4>MARKETING</h4>
              <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainServices;
