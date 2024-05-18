import Applications from 'components/applications/Applications';
import Questions from 'components/questions/Questions';
import Border from 'components/border/Border';
import Directions from 'components/directions/Directions';
import Header from 'components/header/Header';
import Poster from 'components/poster/Poster';
import Services from 'components/services/Services';
import React from 'react';
import Footer from 'components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Border />
      <Poster />
      <Directions />
      <Services />
      <Applications />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
