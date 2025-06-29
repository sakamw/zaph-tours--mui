import { Box } from "@mui/material";
import AboutSection from "../Components/Home/AboutSection";
import FeaturedDestinations from "../Components/Home/FeaturedDestinations";
import HomeHeroSection from "../Components/Home/HeroSection";
import NewsLetter from "../Components/Home/NewsLetter";
import Testimonials from "../Components/Home/Testimonials";

const HomePage = () => {
  return (
    <Box>
      <HomeHeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <Testimonials />
      <NewsLetter />
    </Box>
  );
};

export default HomePage;
