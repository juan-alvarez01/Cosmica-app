import React from "react";
import { useContactFormContext } from "../../context/ContactFormContext";
import '../gameForm/GameForm.css'


export default function ContactForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    comments,
    setComments,
    handleSubmit,
    errors,
    contacts,
  } = useContactFormContext();

  return (
    <>
  <h1>Formulario De Personaje</h1>
  <form onSubmit={handleSubmit} className="character-form">
    <ul>
      <li>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese un Nombre"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
      </li>
      <li>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingrese un Email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
      </li>
      <li>
        <label htmlFor="comments">Comentarios: </label>
        <input
          type="text"
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Ingrese Comentarios"
        />
        {errors.comments && <p className="error-message">{errors.comments}</p>}
      </li>    
    </ul>
    <button type="submit">Agregar</button>
  </form>
  {errors.general && <p>{errors.general}</p>}
</>

  );
}
