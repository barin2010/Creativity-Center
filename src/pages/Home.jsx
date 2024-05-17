import Border from 'components/border/Border';
import Directions from 'components/directions/Directions';
import Header from 'components/header/Header';
import Poster from 'components/poster/Poster';
import Services from 'components/services/Services';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Header />
      <Border />
      <Poster />
      <Directions />
      <Services />
    </div>
  );
};

export default Home;
