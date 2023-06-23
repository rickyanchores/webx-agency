import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';


const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);


export default App;
