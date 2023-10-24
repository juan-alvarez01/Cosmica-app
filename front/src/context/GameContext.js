import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [game_producer, setGame_Producer] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [release, setRelease] = useState("");
  const [age, setAge] = useState("");
  const [platform, setPlatform] = useState("");
  const [errors, setErrors] = useState({});

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!image) {
      validationErrors.image = "La imagen es requerida.";
    }
    if (!name.trim()) {
      validationErrors.name = "El nombre es requerido.";
    }
    if (!game_producer.trim()) {
      validationErrors.game_producer = "El Nombre de productor es requerido.";
    }
    if (!description.trim()) {
      validationErrors.description = "La descripcion es requerida.";
    }
    if (!gender.trim()) {
      validationErrors.gender = "El género es requerido.";
    }
    if (!release.trim()) {
      validationErrors.release = "La fecha de lanzamiento es requerida.";
    }
    if (!age.trim()) {
      validationErrors.age = "La Edad permitida es requerida.";
    }
    if (!platform.trim()) {
      validationErrors.platform = "Las plataformas son requeridas.";
    }

    if (Object.keys(validationErrors).length === 0) {
      const gameData = new FormData();
        gameData.append("image", image);
        gameData.append("name", name);
        gameData.append("game_producer", game_producer);
        gameData.append("description", description);
        gameData.append("gender", gender);
        gameData.append("release", release);
        gameData.append("age", age);
        gameData.append("platform", platform);
        console.log(image, name, game_producer,description,gender, release, age, platform);
      try {
        const response = await fetch("http://localhost:5000/api/products", {
          method: "POST",
          body: gameData
        })
        if (response.ok) {
          const data = await response.json();
          console.log("Datos enviados exitosamente a la API", data);
          setImage(null);
          setName("");
          setGame_Producer("");
          setRelease("");
          setGender("");
          setAge("");
          setDescription("");
          setPlatform("");
        } else {
          console.log(gameData);
          console.error("Error al enviar los datos a la API");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    } else {
      setErrors(validationErrors);
    }

  };
  const formState = {
    image,
    setImage,
    name,
    setName,
    game_producer,
    setGame_Producer,
    description,
    setDescription,
    gender,
    setGender,
    release,
    setRelease,
    age,
    setAge,
    platform,
    setPlatform,
    handleSubmit,
    errors,
  }
  return <GameContext.Provider value={formState}>{children}</GameContext.Provider>;
}
