import React, { Component } from "react";

import "./mainWork.css";

class MainWork extends Component {
  render() {
    return (
      <section className="wrapper">
        <div className="main_work">
          <h1 className="upperCase">
            take a look at <span className="bolderText">our work</span>
          </h1>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque
              maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit
              excepturi porro ipsa tenetur.
            </i>
          </p>
          <div className="gallery">
            <div className="lines line1">
              <div>
                <img src="./img/im1.png" alt="" />
              </div>
              <div>
                <img src="./img/im1.png" alt="" />
              </div>
              <div>
                <img src="./img/im1.png" alt="" />
              </div>
              <div>
                <img src="./img/im1.png" alt="" />
              </div>
            </div>
            <div className="lines line2">
              <div>
                <img src="./img/im2.png" alt="" />
              </div>
              <div>
                <img src="./img/im2.png" alt="" />
              </div>
              <div>
                <img src="./img/im2.png" alt="" />
              </div>
              <div>
                <img src="./img/im2.png" alt="" />
              </div>
            </div>
            <div className="lines line3">
              <div>
                <img src="./img/im3.png" alt="" />
              </div>
              <div>
                <img src="./img/im3.png" alt="" />
              </div>
              <div>
                <img src="./img/im3.png" alt="" />
              </div>
              <div>
                <img src="./img/im3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainWork;
