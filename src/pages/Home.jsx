import Applications from 'components/applications/Applications';
import Questions from 'components/questions/Questions';
import Border from 'components/border/Border';
import Directions from 'components/directions/Directions';
import Poster from 'components/poster/Poster';
import Services from 'components/services/Services';
import React from 'react';
import { postersData } from 'components/poster/postersData';

const Home = () => {
  return (
    <div>
      <Border />
      <Poster poster={postersData} />
      <Directions />
      <Services />
      <Applications />
      <Questions />
    </div>
  );
};

export default Home;
