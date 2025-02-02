import "./Hero.css";
import { convertHexToRgba } from "../../util/index";
import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import HeroImage from "../../assets/hero.png";
import BoxAnimation from "../../assets/BoxAnimation";
const Hero = () => {
  return (
    <section id="hero">
      <BoxAnimation />
      <div className="container">
        <div>
          <h4
            className="text-primary hero-subtitle"
            style={{ background: convertHexToRgba("--primary", 0.2) }}
          >
            Innovating Tomorrow, Today
          </h4>
          <h1 className="hero-title">
            Shree Software – Software You Can Trust
          </h1>
          <p className="hero-description">
            Shreem Software Pvt. Ltd. is committed to delivering smart,
            customized, and reliable software solutions. We collaborate with
            businesses to turn challenges into opportunities through technology.
            Whether it is web development, cloud solutions, or enterprise
            software, we ensure quality, efficiency, and customer satisfaction
            at every step.
          </p>
          <div className="button-wrapper">
            <Link to="contact" smooth={true} className="btn primary">
              Get Started <FaArrowTrendUp />
            </Link>
            <Link to="projects" smooth={true} className="btn">
              See Our Work <FaProjectDiagram />
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
