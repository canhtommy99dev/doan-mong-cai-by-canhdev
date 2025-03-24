import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import About from "./pages/abouts/About";
import Events from "./pages/events/Events";
import Contact from "./pages/contacts/Contacts";
import Footer from "./components/footer";
import NotFound from "./pages/not-found/NotFound";
import EventDetail from "./pages/event_details/EventDetail";

const App = () => {
  const getRouteParams = (path) => {
    const parts = path.split("/").filter(Boolean);
    return parts.length > 1 ? parts.slice(1) : [];
  };

  const [route, setRoute] = useState(window.location.pathname);
  const [params, setParams] = useState(getRouteParams(route));

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname;
      setRoute(newPath);
      setParams(getRouteParams(newPath));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    setParams(getRouteParams(path));
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      {route === "/" && <Home />}
      {route === "/about" && <About />}
      {route === "/events" && <Events />}
      {route.startsWith("/events_detail/") && params.length > 0 && (
        <EventDetail eventId={params[0]} />
      )}
      {route === "/contact" && <Contact />}
      {!["/", "/about", "/events", "/contact"].includes(route) &&
        !route.startsWith("/events_detail/") && <NotFound />}
      <Footer />
    </div>
  );
};

export default App;
