import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import About from "./pages/abouts/About";
import Events from "./pages/events/Events";
import Contact from "./pages/contacts/Contacts";
import Footer from "./components/footer";

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  window.onpopstate = () => setRoute(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      {route === "/" && <Home />}
      {route === "/about" && <About />}
      {route === "/events" && <Events />}
      {route === "/contact" && <Contact />}
      <Footer />
    </div>
  );
};

export default App;
