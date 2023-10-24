import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactForm from '../templates/contact/Contact';
import About from '../templates/about/about';
import '../header/Header.css';
import GameForm from '../gameForm/gameForm';

const Header = () => {
  const [contacts, setContacts] = useState([]);
  const [cards, setCards] = useState([]);

  const onAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const onAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };
  return (  
  <div className="header-nav">
    <nav className="header-nav-list">
      <ul className="header-nav-list">
        <li className="header-nav-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/alta">Alta</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
        <li className="header-nav-item">
          <Link to="/nosotros">Nosotros</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/alta" element={<GameForm  onAddCard={onAddCard}  />} />
        <Route path="/contacto" element={<ContactForm onAddContact={onAddContact}/>} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
  </div>
  

    
  );
};
export default Header;
