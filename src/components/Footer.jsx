import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 0,
        // left: 0,
        // right: 0,
        width: "100%",
        padding: "10px",
        background: "#263963",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387304.2917290471!2d-74.25987134999999!3d40.6971494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d8c24a95a05f%3A0x9ba30fb3c57d762e!2sNewark%2C%20NJ!5e0!3m2!1sen!2sus!4v1615487440267!5m2!1sen!2sus"
            style={{
              margin: "2rem",
              width: "600px",
              height: "400px",
              loading: "lazy",
            }}
          ></iframe>
        </div>

        <div style={{ border: "1px solid white", margin: "2rem" }}>
          <h1>Contact</h1>
          <p>
            About The Met <br /> Mission and History <br /> Collection Areas{" "}
            <br />
            Conservation Departments <br /> Accessibility <br /> Press
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
