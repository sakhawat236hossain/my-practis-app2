import React from "react";
import "./Country.css";
const Country = ({ country }) => {
  console.log(country.area.area);
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>
        name: {country.name.common} ({country.cca3.cca3})
      </h3>
      <h3>capital: {country.capital.capital[0]}</h3>
      <h3>continents: {country.continents.continents[0]}</h3>
      <h3>population: {country.population.population}</h3>
      <h3>region: {country.region.region}</h3>
      <h3>area: {country.area.area} {country.area.area>300000?"big country":"small country"}</h3>
    </div>
  );
};

export default Country;
