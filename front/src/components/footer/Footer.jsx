import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li className="footer-link-item">
          <a href="/">Inicio</a>
        </li>
        <li className="footer-link-item">
          <a href="/alta">Alta</a>
        </li>
        <li className="footer-link-item">
          <a href="/contacto">Contacto</a>
        </li>
        <li className="footer-link-item">
          <a href="/nosotros">Nosotros</a>
        </li>
      </ul>
      <div className="footer-info">
        <p>Ubicación: AdultSwim</p>
        <p>Teléfono: (666) 666-6666</p>
        <p>Correo electrónico: JamalAlvarez666@gmail.com</p>
        <p>Horarios: Martes & Viernes de 5:00 PM a 8:00 PM</p>
      </div>
    </footer>
  );
};
export default Footer;
