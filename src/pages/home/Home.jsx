import { Button } from "@/components/ui/button";
import GradientBackground from "./components/GradientBackground";
import ScrollAnimation from "./components/ScrollAnimation";
import Feature from "./components/feature";
import BlogSection from "./components/BlogSection";
import NewFeature from "./components/NewFeature";
// import CarouselSider from "./components/carousel";

const Home = () => {
  return (
    <div>
      <GradientBackground />
      <Feature />
      <BlogSection />
      <NewFeature />
    </div>
  );
};

export default Home;
