import React from 'react';
import logo from '../images/logo.png';

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>About FrenzyShop</h2>
        <p>
          FrenzyShop is an online marketplace that was founded with the goal of
          providing customers with a better way to shop online. We believe that
          shopping should be a fun and exciting experience, which is why we
          offer a wide range of products at affordable prices, along with fast
          shipping and excellent customer service.
        </p>
        <p>
          At FrenzyShop, we are committed to offering only the best products
          from trusted brands, so you can shop with confidence knowing that you
          are getting high-quality products that are built to last. From the
          latest fashion trends to cutting-edge electronics and everything in
          between, we have something for everyone.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission at FrenzyShop is to make shopping online more enjoyable
          and convenient than ever before. We are constantly working to improve
          our website and services to ensure that our customers have the best
          possible shopping experience.
        </p>
        <p>
          Whether you are looking for a specific product or just browsing for
          inspiration, we want FrenzyShop to be your go-to destination for all
          your online shopping needs. Thank you for choosing FrenzyShop!
        </p>
      </div>
      <div className="about-us-image">
        <img src={logo} alt="FrenzyShop logo" />
      </div>
    </div>
  );
};

export default AboutUsPage;
