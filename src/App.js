import React from "react";
import Componies from "./Components/Componies/Componies";
import Sale from "./Components/Sale/Sale";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'


import GetStarted from './Components/GetStarted/GetStarted'
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Componies />
      <Sale />
      <Value/>
      <GetStarted/>
    <Contact/>
      <Footer/>
     
     
    </div>
  );
};

export default App;
