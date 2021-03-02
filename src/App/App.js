import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import '../common/style/reset.css';
import '../common/style/style.css';

import AboutUs from './AboutUs/AboutUs';
import Blog from './Blog/Blog';
import Clients from './Clients/Clients';
import Cover from './Cover/Cover';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import StayInTouch from './StayInTouch/StayInTouch';
import Works from './Works/Works';
import WorksFeedback from './WorksFeedback/WorksFeedback';

const App = () => {
  return (
    <>
      <Header/>
      <Cover/>
      <Services/>
      <AboutUs/>
      <Works/>
      <WorksFeedback/>
      <Blog/>
      <Clients/>
      <StayInTouch/>
      <Footer/>  
    </>
  )
}

export default App;
