import React, { Component } from 'react';

import '../common/style/reset.css';
import '../common/style/style.css';

import AboutUs from './AboutUs/AboutUs';
import Blog from './Blog/Blog';
import Clients from './Clients/Clients';
import Cover from './Cover/Cover';
import Header from './Header/Header';
import Services from './Services/Services';
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
      <h1>Hello, Motherfucker</h1>  
    </>
  )
}

export default App;
