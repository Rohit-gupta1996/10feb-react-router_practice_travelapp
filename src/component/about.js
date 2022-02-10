import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div class="about-section">
        <h1>About Our Page</h1>
        <p>
          Nurtured from the seed of a single great idea - to empower the
          traveller - RRJVP is a pioneer in India’s online travel industry.
          Founded in the year 2022
        </p>
        <p>
          The company initiated its journey serving the US-India travel market
          offering a range of best-value products and services powered by
          technology and round-the-clock customer support.After consolidating
          its position in the market as a brand recognised for its reliability
          and transparency.
        </p>
      </div>

      <h2>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src="https://userphotos2.teacheron.com/905507-29665.jpg"
              alt="image1"
            />
            <div class="container">
              <h2>Rohit Gupta</h2>
              <p class="title">Founder</p>
              <p> Known for co-founding the online traveling website RRJVP.</p>
              <p>rohitgpt12slp@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHULrJjOPlonA/profile-displayphoto-shrink_200_200/0/1610125064570?e=1648080000&v=beta&t=w36jbUu2RGZorJLDulH9zI--ofhNaETaJMKg5Pc6sOg"
              alt="image1"
            />
            <div class="container">
              <h2>Rahul Shaw</h2>
              <p class="title">CEO</p>
              <p>Known for co-founding the online traveling website RRJVP.</p>
              <p>rahul@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGU1YOD3lKjwQ/profile-displayphoto-shrink_200_200/0/1620133111840?e=1649894400&v=beta&t=L2kteLYROQEQKzHCtujFkw94c-mGqAPXuJPKDPuNGZw"
              alt="image1"
            />
            <div class="container">
              <h2>Jatin Mangla</h2>
              <p class="title">CFO</p>
              <p>Known for co-founding the online traveling website RRJVP.</p>
              <p>jatin@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;