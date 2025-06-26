import HeroSection from "./components/HeroSection";
import CustomNavbar from "./components/Navbar";

import './App.css';
import SocialIcons from "./components/SocialIcons";
import AboutSection from "./components/AboutSection";
const App = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <SocialIcons />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default App;
