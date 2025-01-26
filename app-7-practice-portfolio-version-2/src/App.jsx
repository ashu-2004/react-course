import { useEffect } from "react";
import Contact from "./componetns/Contact";
import Education from "./componetns/Education";
import Experience from "./componetns/Experience";
import Home from "./componetns/Home";
import Projects from "./componetns/Projects";
import Technologies from "./componetns/Technologies";
import Certificates from "./componetns/Certificates";

function App() {
  useEffect(() => {
    // Function to handle scrolling with offset for fixed navbar
    const handleAnchorScroll = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = 80; // Same as the height of the fixed navbar (h-20 in Tailwind)

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", // Smooth scrolling effect
          });
        }
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleAnchorScroll);

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleAnchorScroll);
    };
  }, []);

  return (
    <div>
      <Home id="Home"></Home>
      <Technologies id="Technologies"></Technologies>
      <Projects id="Projects"></Projects>
      <Experience id="Experience"></Experience>
      <Education id="Education"></Education>
      <Certificates id="Certificates"></Certificates>
      <Contact id="Contacts"></Contact>
    </div>
  );
}

export default App;
