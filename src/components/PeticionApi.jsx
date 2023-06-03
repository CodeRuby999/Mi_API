
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PeticionApi = () => {
    const [personajes, setPersonajes] = useState([]);
    const [paginacion, setPaginacion] = useState(1);
    useEffect(() => {
        traerPersonajes();
      }, [paginacion]);
    