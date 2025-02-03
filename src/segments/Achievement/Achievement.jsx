import { useEffect, useState } from "react";
import "./Achievement.css";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
const Achievement = () => {
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClients(200);
      setSatisfaction(98);
      setProjects(500);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <section id="achievement">
      <div className="container">
        <div className="achievement">
          <p className="sub-title">Trusted By</p>
          <Odometer value={clients} className="title" />
          <p className="sub-title">Clients</p>
          <p className="description">
            Building lasting partnerships through reliable IT services.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Clients With</p>
          <Odometer value={satisfaction} className="title" />
          <p className="sub-title">Satisfaction</p>
          <p className="description">
            Delivering IT solution that boost productivity.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Deployed</p>
          <Odometer value={projects} className="title" />
          <p className="sub-title">IT Infrastructures</p>
          <p className="description">
            Delivered robust IT systems for businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
