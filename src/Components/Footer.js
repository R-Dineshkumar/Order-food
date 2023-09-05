import React from 'react';
import {
  FaInstagram, FaFacebookSquare, FaPinterest, FaTwitter,
} from 'react-icons/fa';

import footerlogo from './Images/footer.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer-heading">
        <img src={footerlogo} alt="footer-logo" />
        <h1>Tasty Kitchen</h1>
      </div>
      <p>
        The only thing we are serious about is food.
        <br />
        Contact us on
      </p>
      <div className="icons-container">
        <FaPinterest className="icons" />
        <FaInstagram className="icons" />
        <FaTwitter className="icons" />
        <FaFacebookSquare className="icons" />
      </div>
    </footer>
  );
}
