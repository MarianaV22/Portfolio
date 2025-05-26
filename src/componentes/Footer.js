import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Contactos */}
      <div className="footer-section">
        <h3 className="footer-title">Contacto</h3>
        <ul className="footer-list">
          <li>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:tu@exemplo.com">mmoscoso@gmail.com</a>
          </li>
          <li>
            <FaMapMarkerAlt className="footer-icon" />
            Vila Real, Portugal
          </li>
        </ul>
      </div>

      {/* Redes Sociais (opcional) */}
      <div className="footer-section">
        <h3 className="footer-title">Social</h3>
        <ul className="footer-list social-list">
          <li>
            <a
              href="https://github.com/MarianaV22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-icon" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mariana-veiga-47b39b268"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-icon" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Mariana Veiga. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
