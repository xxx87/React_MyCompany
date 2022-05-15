import React, { Component } from "react";

import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <div className="social">
            <a href={null}>
              <img src="./img/facebook.png" alt="facebook" />
            </a>
            <a href={null}>
              <img src="./img/twitter.png" alt="twitter" />
            </a>
            <a href={null}>
              <img src="./img/google.png" alt="google" />
            </a>
            <a href={null}>
              <img src="./img/linkedin.png" alt="linkedin" />
            </a>
            <a href={null}>
              <img src="./img/dribbble.png" alt="dribbble" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
