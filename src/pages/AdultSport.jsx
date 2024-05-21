import SportAdult from 'components/sportAdult/SportAdult';
import React from 'react';

const AdultSport = () => {
  return (
    <div>
      <SportAdult key={SportAdult.id} img={SportAdult.img} />
    </div>
  );
};

export default AdultSport;
