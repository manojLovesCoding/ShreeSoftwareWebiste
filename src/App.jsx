import Navbar from "./segments/Navbar/Navbar";
import Hero from "./segments/Hero/Hero";
import Achievement from "./segments/Achievement/Achievement";
import About from "./segments/About/About";
import Service from "./segments/Services/Service";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <About />
      <Service />
    </>
  );
};

export default App;
