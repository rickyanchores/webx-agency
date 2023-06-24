import React from 'react';
import Card from '../../Components/Card/Card';
import Nav from '../../Components/Nav/Nav';
import Grid from '../../Components/Grid/Grid';

const Home = () => {
  return (
    <div className="Home flex flex-col justify-center items-center">
  
      <div className="Title flex flex-col justify-center items-center text-orange-400 p-20 text-8xl md:text-9xl m-30">
        <h1>Webx-Agency</h1>
        <Nav />
      </div>
  
      <div className="container">
        <Grid />
      </div>
    </div>
  );
};

export default Home;
