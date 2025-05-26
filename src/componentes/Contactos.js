import React from 'react';
import './Contactos.css';

const Contact = () => (
  <section className="contact">
    <h2 className="contact-title">Contacto</h2>
    <hr className="contact-separator" />
    <ul className="contact-list">
      <li><strong>Email:</strong> <a href="mailto:tu@exemplo.com">tu@exemplo.com</a></li>
      <li><strong>Localização:</strong> Vila Real, Portugal</li>
    </ul>
  </section>
);

export default Contact;
