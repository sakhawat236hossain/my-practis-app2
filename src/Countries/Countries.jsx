import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countrise.css'
const Countries = ({CountriesPromise}) => {
    const [visitedeContries,setVisitedeContries]=useState([])
    const handelVisitedCountru=(country)=>{
        console.log('mama',country);
        const newVisitedCountry =[...visitedeContries,country];
        setVisitedeContries(newVisitedCountry)
    }
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries
    // console.log(countries);
    
 return(
    <div>
        <h2>totle countries: {countries.length}</h2>
        <h2>visited countrise: {visitedeContries.length}</h2>
        <ol>
            {
                visitedeContries.map(country=> <li>{country.name.common}</li>)
            }
        </ol>
      <div  className='countries'> 
          {
            countries.map(country=><Country
                 key={country.cca3.cca3}
                 country={country}
                 handelVisitedCountru={handelVisitedCountru}
                 ></Country>)
        }
      </div>
    </div>
 )
};

export default Countries;