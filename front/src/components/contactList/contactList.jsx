import { ContactFormProvider, useContactFormContext } from "../../context/ContactFormContext";


export default function ContactList() {
  const {
    contacts,
  } = useContactFormContext();

    return (
      <>
      <div className="character-list">
        <h2>Contactos Agregados:</h2>
        {contacts.length === 0 ? (
          <p>No hay contactos agregados aún.</p>
        ) : (
          <ul className="character-list">
            {contacts.map((contact) => (
              <li key={contact.id} className="character-card">
                <p>Nombre: {contact.name}</p>
                <p>Email: {contact.email}</p>
                <p>Comentarios: {contact.comments}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}