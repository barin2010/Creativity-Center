import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Organizers from './organizers/Organizers';
import Contacts from './contacts/Contacts';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/organizers" element={<Organizers />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
