import React from "react";
import { Link } from "react-router-dom";
import img  from "../assets/about-section.jpg";
import skillsImg  from "../assets/about-us-skills.jpg";
import { MdCoffee, MdCoffeeMaker, MdDepartureBoard } from "react-icons/md";

const About = () => {
  return (
    <section className="about-us-section">
      <h1 className="section-title">About us</h1>
      <div className="container-about-us">
        <article className="presentation">
          <div className="about-market-group">
            <div className="about-market">
              <h2>Who we are</h2>
              <h1>About market</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ornare, orci id finibus finibus, est justo pharetra
                odio, eget viverra lectus ante eget sem. Phasellus et diam vel
                eros fermentum malesuada vitae vitae felis. Nam enim orci,
                ullamcorper ut felis pellentesque, aliquam efficitur leo.
                Vivamus malesuada, mi sed varius laoreet, ipsum metus vehicula
                metus, non hendrerit augue sapien vel velit. Duis bibendum dui
                sit amet erat bibendum tincidunt. Nullam quis tristique nunc.
                Nullam a finibus urna. Quisque elementum malesuada pretium.
              </p>
              <Link to="/products" className="btn btn-about-page">
                View Products
              </Link>
            </div>
            <div className="about-market-img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="about-skills">
            <div className="card-skill">
              <div className="card-skill-img">
                <MdCoffee />
              </div>
              <div className="card-skill-title">
                <h3>The best World sorts</h3>
              </div>
              <div className="card-skill-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  perspiciatis nobis quidem?
                </p>
              </div>
            </div>
            <div className="card-skill">
              <div className="card-skill-img">
                <MdCoffeeMaker />
              </div>
              <div className="card-skill-title">
                <h3>Professional baristas</h3>
              </div>
              <div className="card-skill-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  perspiciatis nobis quidem?
                </p>
              </div>
            </div>
            <div className="card-skill">
              <div className="card-skill-img">
                <MdDepartureBoard />
              </div>
              <div className="card-skill-title">
                <h3>24/7 fast delivery</h3>
              </div>
              <div className="card-skill-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  perspiciatis nobis quidem?
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="our-skills-article">
            <img src={skillsImg} alt="" />
                <div className="our-skills-content">
                    <h2>Our clients say</h2>
                    <h1>Our skills</h1>
                    <div className="our-skills-cards">
                        <div className="our-skill-card">
                            <h2>10</h2>
                            <h5>Products type</h5>
                            <p>Lorem ipsum dolor sit,
                                 amet consectetur adipisicing elit. 
                                 Blanditiis, rerum.</p>
                        </div>
                        <div className="our-skill-card">
                            <h2>6</h2>
                            <h5>Years Experience</h5>
                            <p>Lorem ipsum dolor sit,
                                 amet consectetur adipisicing elit. 
                                 Blanditiis, rerum.</p>
                        </div>
                        <div className="our-skill-card">
                            <h2>856</h2>
                            <h5>Happy Buyer</h5>
                            <p>Lorem ipsum dolor sit,
                                 amet consectetur adipisicing elit. 
                                 Blanditiis, rerum.</p>
                        </div>
                     
                    </div>
                </div>
        </article>
      </div>
    </section>
  );
};
export default About;
