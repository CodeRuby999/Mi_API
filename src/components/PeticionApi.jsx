
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeticionApi = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginacion, setPaginacion] = useState(1);

  useEffect(() => {
    traerPersonajes();
  }, [paginacion]);

  const traerPersonajes = async () => {
    try {
      const res = await fetch(`https://swapi.dev/api/people/?page=${paginacion}`);
      const respuesta = await res.json();
      const auxPersonajes = respuesta.results;

      // Obtener las imágenes de los personajes desde la API Star Wars Images
      const personajesConImagenes = await Promise.all(auxPersonajes.map(async (personaje) => {
        try {
          const res = await axios.get(`https://starwars-visualguide.com/assets/img/characters/${getPersonajeId(personaje.url)}.jpg`);
          personaje.image = res.request.responseURL;
        } catch (error) {
          console.log(`Error al obtener la imagen del personaje ${personaje.name}: ${error.message}`);
        }

        return personaje;
      }));

      setPersonajes(personajesConImagenes);
    } catch (error) {
      console.log(error);
    }
  };

  const siguiente = () => {
    setPaginacion(paginacion + 1);
  };

  const atras = () => {
    if (paginacion > 1) {
      setPaginacion(paginacion - 1);
    }
  };

  // Función para obtener el ID del personaje desde la URL de la API de Star Wars
  const getPersonajeId = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  return (
    <div>
      <h1>PETICIÓN AL API DE STAR WARS</h1>
      <button onClick={traerPersonajes}>Traer Personajes</button>
      <button onClick={siguiente}>Siguiente</button>
      <button onClick={atras}>Atrás</button>
      {personajes.map((personaje) => (
        <div key={personaje.url}>
          <h4>{personaje.name}</h4>
          {personaje.image && <img src={personaje.image} alt={personaje.name} />}
        </div>
      ))}
    </div>
  );
};

export default PeticionApi;
