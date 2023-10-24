import { createContext, useContext, useState } from "react";

const ContactFormContext = createContext();

export function useContactFormContext() {
  return useContext(ContactFormContext);
}

export function ContactFormProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "El Nombre es requerido.";
    }
    if (!email.trim()) {
      validationErrors.email = "El E-Mail es requerido.";
    }
    if (!comments.trim()) {
      validationErrors.comments = "Los Comentarios son requeridos.";
    }
    let userData = {
      name,
      email,
      comments,
    }
    if (Object.keys(validationErrors).length === 0) {
      userData = {
        name,
        email,
        comments,
      };
      try{
        const response = await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
        if (response.ok) {
          const data = await response.json();
          console.log("Los Datos:", data , "Fueron enviados exitosamente a la API");
          setName("");
          setEmail("");
          setComments("");
        } else {
          console.log(userData);
          console.error("Error al enviar los datos a la API");
        }
        } catch (error) {
          console.error("Error de red:", error);
        }
      }else {
      setErrors(validationErrors);
      }
    }
  const formState = {
    name,
    setName,
    email,
    setEmail,
    comments,
    setComments,
    handleSubmit,
    errors,
  }
  return (
    <ContactFormContext.Provider value={formState}>
      {children}
    </ContactFormContext.Provider>
  );
};

 
  
