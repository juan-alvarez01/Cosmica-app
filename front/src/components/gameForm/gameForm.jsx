import React from "react";
import { useGameContext } from "../../context/GameContext";
import "./GameForm.css";

export default function GameForm() {
  const {
    image,
    setImage,
    name,
    setName,
    game_producer,
    setGame_Producer,
    gender,
    setGender,
    description,
    setDescription,
    release,
    setRelease,
    age,
    setAge,
    platform,
    setPlatform,
    handleSubmit,
    errors,
  } = useGameContext();

  return (
    <>
      <h1 >Formulario De Personaje</h1>
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="character-form">
        <ul>
          <li>
            <label htmlFor="imagen">Imagen:</label>           
            <input
              type="file"
              name="image"
              id="imagen"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {errors.image && <p className="error-message" >{errors.image}</p>}
          </li>
          <li>
            <label htmlFor="name">Nombre: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese un Nombre"
            />
            {errors.name && <p className="error-message" >{errors.name}</p>}
          </li>
          <li>
            <label htmlFor="game_producer">Productora: </label>
            <input
              type="text"
              id="game_producer"
              value={game_producer}
              onChange={(e) => setGame_Producer(e.target.value)}
              placeholder="Ingrese Productor(es) de el videojuego"
            />
            {errors.game_producer && <p className="error-message" >{errors.game_producer}</p>}
          </li>
          <li>
            <label htmlFor="release">Lanzamiento: </label>
            <input
              type="text"
              id="release"
              value={release}
              onChange={(e) => setRelease(e.target.value)}
              placeholder="Ingrese una Fecha de lanzamiento"
            />
             {errors.release && <p className="error-message" >{errors.release}</p>}
          </li>
          <li>
            <label htmlFor="gender">Genero: </label>          
            <input
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Ingrese un Genero"
            />
             {errors.gender && <p className="error-message" >{errors.gender}</p>}
          </li>
          <li>
            <label htmlFor="age">Edad minima: </label>      
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Ingrese Edad minima permitida"
            />
             {errors.age && <p className="error-message" >{errors.age}</p>}
          </li>
          <li>
            <label htmlFor="description">Descripcion: </label>         
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese una Descripcion"
            />
             {errors.description && <p className="error-message" >{errors.description}</p>}
          </li>
          <li>
            <label htmlFor="platform">Plataformas: </label>           
            <input
              type="text"
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="Ingrese Plataformas disponibles
              "
            />
            {errors.platform && <p className="error-message" >{errors.platform}</p>}
          </li>
        </ul>
        <button type="submit">Agregar</button>
      </form>
      {errors.general && <p>{errors.general}</p>}
    </>
  );
}
