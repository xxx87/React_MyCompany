import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

var smoothJumpUp = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 20);
  }
};

window.onscroll = function () {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var topButton = document.getElementById("upbutton");
  scrolled > 200 ? (topButton.className = "class2") : (topButton.className = "class1");
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <a className="class1" id="upbutton" href="#" onClick={smoothJumpUp()}>
          <img src="./img/up1.png" alt="Top" border="none" title="Наверх" />
        </a>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
