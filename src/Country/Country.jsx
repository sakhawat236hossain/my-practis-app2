import React from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>name: {country.name.common}</h3>
        </div>
    );
};

export default Country;