import React, { Component } from "react";

import "./mainClients.css";

class MainClients extends Component {
  render() {
    return (
      <section className="main_clients">
        <div className="wrapper">
          <h1>
            SOME OF <span className="bolderText">OUR CLIENTS</span>
          </h1>
          <div className="line"></div>
          <div className="clients">
            <img src="./img/chanel.png" alt="chanel" />
            <img src="./img/zara.png" alt="zara" />
            <img src="./img/guerlain.png" alt="guerlain" />
            <img src="./img/lancome.png" alt="lancome" />
            <img src="./img/lacoste.png" alt="lacoste" />
          </div>
        </div>
      </section>
    );
  }
}

export default MainClients;
