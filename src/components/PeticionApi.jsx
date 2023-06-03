
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