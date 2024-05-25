import React from 'react';
import SportAdult from 'components/sportAdult/SportAdult';

const ChildrenSport = () => {
  return (
    <div>
      <SportAdult key={SportAdult.id} img={SportAdult.img} />
    </div>
  );
};

export default ChildrenSport;
