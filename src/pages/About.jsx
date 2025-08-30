import React from "react";
import "../styles/About.css";

const team = [
  { id: 1, name: "Alice Johnson", role: "Founder & CEO", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Bob Smith", role: "Lead Developer", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Catherine Lee", role: "Marketing Head", image: "https://via.placeholder.com/150" },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About ECOMMERCE</h1>
          <p>
            At ECOMMERCE, we are dedicated to bringing you the best products with exceptional service. 
            Our mission is to make online shopping easy, affordable, and enjoyable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide high-quality products that enrich the lives of our customers. 
          We value integrity, innovation, and excellence in every aspect of our business.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
