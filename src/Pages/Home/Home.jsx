import React from 'react';
import Card from '../../Components/Card/Card';
import Nav from '../../Components/Nav/Nav';
import Grid from '../../Components/Grid/Grid';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
  return (
    <div className="Home  justify-center items-center">
      <div className="Title flex-col text-orange-400 p-40 text-8xl md:text-9xl m-30">
        Webx-Agency
        <Nav />
      </div>
      <div className="container">
        <Banner />
      </div>
  
      <div className="container">
        <Grid />
      </div>
    </div>
  );
};

export default Home;
