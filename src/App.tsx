import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel1 from './components/Carousel/CarouselOne'
import Dialouge from './components/Dialouge';
import { VideoCard } from "./components/VideoCard";
import Services from './components/Services'
import OurService from './components/OurService';
import Benefits from './components/Benefits'
import PersonalFitness from './components/PersonalFitness';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Carousel1 />
      <Dialouge />
      <VideoCard />
      <Services />
      <OurService />
      <Benefits />
      <PersonalFitness />
    </Router>
  );
};

export default App;