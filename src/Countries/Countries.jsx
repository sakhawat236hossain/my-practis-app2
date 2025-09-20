import React, { use } from 'react';
import Country from '../Country/Country';
import './Countrise.css'
const Countries = ({CountriesPromise}) => {
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries
    console.log(countries);
    
 return(
    <div>
        <h2>totle countries: {countries.length}</h2>
        <h2>visited countrise:</h2>
      <div  className='countries'> 
          {
            countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
        }
      </div>
    </div>
 )
};

export default Countries;