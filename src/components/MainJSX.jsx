import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import HomeItem from './Home/HomeItem';
import Travel from './Travel/Travel';
import { Exception } from 'sass';
import ExcursionAbouter from './Excursion-time/ExcursionDIvs';
import MainExcursion from './MainExcursion/MainExcursion';
import { useEffect } from 'react';
import Favorites from './Favorites/Favorites';

function MainJSX() {

  return (
    <Routes path="/">
      <Route path="/" element={<Home />} />
      <Route path="/homeitem" element={<HomeItem />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/excursion" element={<ExcursionAbouter />} />
      <Route path="/allexcursion" element={<MainExcursion />} />
      <Route path="/Personal" element={<Favorites />} />
    </Routes>
  );
}

export default MainJSX;