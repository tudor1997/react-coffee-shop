import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
  FaYoutube,
  FaLocationArrow,
  FaSkype,
  FaPhoneSquare
} from "react-icons/fa";
import submitMessage from '../strapi/submitMessage';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    const [alert,setAlert] = useState(false);

async function handleSubmit(e) {
    e.preventDefault();
    const messageSubmit = await submitMessage({name, email, message ,setAlert});
    setTimeout(() =>{
        setAlert(false)
        setName("");
        setEmail("");
        setMessage("");
    },3000);

  }
  return (
    <section className="contact-us-section">
        <div className="section-title">Contact Us</div>
        <div className="contact-row">
        <div className="contact-info column-contact">
        <h1>Central Office</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          perferendis? Eligendi tempore repudiandae praesentium perferendis
          animi debitis asperiores iure odit!
        </p>
        <p><FaPhoneSquare className="phone" /> 0(800) 890-90-609</p>
        <p><FaSkype className="skype" /> CoffeeShop</p>
        <p> <FaLocationArrow className="location"/> 252 Euclid Avenue, Paso Robles, California</p>
        <div className="socials-icons">
          <div className="facebook">
            <FaFacebook />
          </div>
          <div className="twitter">
            <FaTwitterSquare />
          </div>
          <div className="instagram">
            <FaInstagram />
          </div>
          <div className="youtube">
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="contact-time column-contact">
        <div className="timetable">
          <h3>Opening Hours</h3>
          <ul className="timetable-list">
            <li className="timetable-elem">
              <span>Monday: </span> 9:00-19:00
            </li>
            <li className="timetable-elem">
              <span>Tuesday: </span> 9:00-19:00
            </li>
            <li className="timetable-elem">
              <span>Wednesday: </span> 9:00-19:00
            </li>
            <li className="timetable-elem">
              <span>Thursday: </span> 9:00-19:00
            </li>
            <li className="timetable-elem">
              <span>Friday: </span> 9:00-19:00
            </li>
            <li className="timetable-elem">
              <span>Saturday:</span> 10:00-16:00
            </li>
            <li className="timetable-elem">
              <span>Sunday: </span> CLOSED
            </li>
          </ul>
        </div>
      </div>
      <div className="form-contact-container column-contact">
      {alert && <div className="form-success">Your message was sent successfully!</div>}
        <form className="form-contact">  
          <div className="form-control-contact">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-control-contact">
            <label htmlFor="email">Your email address</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-control-contact">
            <label htmlFor="textarea" >Your message</label>
            <textarea id="textarea" value={message} onChange={(e) => setMessage(e.target.value)}/>
          </div>
          <button type="submit" className="contact-btn" onClick={handleSubmit}> Send Message</button>
        </form>
      </div>
        </div>
    </section>
  );
};
export default Contact;
