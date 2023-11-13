import React from "react";
import contact from "../Assets/contact.jpg";
import "./Contact.css";
import msg from "../Assets/msg.png";
import vchat from "../Assets/vchat.png";
import call from "../Assets/call.png";
const Contact = () => {
  return (
    <section className="contact">
      <div className="c-container padding innerWidth flexCenter">
        {/* left side */}
        <div className="c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <p>
            We always ready to help you by best service and deliverd with in
            time we have many big componies around the world
          </p>
         
        </div>

        {/*right side */}

        <div className="c-right">
          <div className="img-container">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
