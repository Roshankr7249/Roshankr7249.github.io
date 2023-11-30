import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// faTwitterSquare, faInstagram,
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="socials">
          <ul id="social-icons">
            <li id="contact-github">
              <a target="_blank" rel="noreferrer" href="https://github.com/Roshankr7249">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li id="contact-linkedin">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/roshan-kumar-558483169">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <a href="https://github.com/Roshankr7249">
            Designed and built by Roshan Kumar{" "}
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </div>
        <a href="mailto: mindsspiritual0@gmail.com" id="contact-email">mindsspiritual0@gmail.com
          <hr /></a>
      </div>
    </footer>
  );
}
