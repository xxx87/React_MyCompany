import React, { Component } from "react";

import "./contactForm.css";

class ContactForm extends Component {
  render() {
    return (
      <section id="contact_form" className="contact_form">
        <div className="contact_wrapper">
          <h1 className="upperCase">contact us</h1>
          <p className="firstP">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque
            maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.{" "}
          </p>
          <form action="#" name="newform" method="post">
            <div className="form_inputs">
              <p>
                Name <span className="red">*</span>
                <input type="text" />
              </p>
              <p>
                Email address <span className="red">*</span>
                <input type="text" />
              </p>
            </div>
            <p>
              Message <span className="red">*</span>
            </p>
            <textarea name="text"></textarea>
            <div className="button_block">
              <input type="submit" value="SEND" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
