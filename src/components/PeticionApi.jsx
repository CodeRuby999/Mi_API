
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