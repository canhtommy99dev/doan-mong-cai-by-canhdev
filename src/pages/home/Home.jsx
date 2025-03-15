import { Button } from "@/components/ui/button";
import GradientBackground from "./components/GradientBackground";
import ScrollAnimation from "./components/ScrollAnimation";
import Feature from "./components/feature";
import BlogSection from "./components/BlogSection";
// import CarouselSider from "./components/carousel";

const Home = () => {
  return (
    <div>
      <GradientBackground />
      <Feature />
      <BlogSection />
    </div>
  );
};

export default Home;
