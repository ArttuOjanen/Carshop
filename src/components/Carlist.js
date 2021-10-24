import React, { useState, useEffect } from 'react';

function Carlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Fetch cars
        fetch('http://carrestapi.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    }, []);
    return(
        <div>Carlist</div>
    );
}

export default Carlist;