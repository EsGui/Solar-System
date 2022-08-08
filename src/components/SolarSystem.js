import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div className="PlanetsSolarSystem">
          { Planets.map((planetas, index) => (
            <PlanetCard
              key={ index }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
