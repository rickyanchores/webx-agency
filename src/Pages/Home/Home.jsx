import React from 'react'
import Card from '../../Components/Card/Card';

const Home = () => {
  return (
    <div className="Home w-5/6 m-auto mt-5 mb-5 p-5">
        <div className="Title">
            <h1>Webx Agency</h1>
            <p>This is Home</p>
        </div>
        <div className="container">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Home;