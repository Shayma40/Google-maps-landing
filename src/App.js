import React from 'react';
import './App.css';
import ContactSection from './Components/contact-section/ContactSection';
import Disclaimer from './Components/disclaimer/Disclaimer';
import Footer from './Components/footer/Footer';
import Intro from './Components/intro/Intro';
import Map from './Components/Map';

function App() {
  return (
    <div className="App">
      <Intro />
      <ContactSection />
      <div className="map-container">
        <Map />
      </div>
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
