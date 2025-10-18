import { useEffect, useRef } from "react";
import heroImage from "./assets/plumbing.jpg"; // your photo

function App() {
  const serviceRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">PlumbDePipe 🚿</h1>
        <div className="nav-actions">
          <button
            className="toggle-button"
            onClick={() => document.body.classList.toggle("dark")}
          >
            🌗
          </button>
          <button className="quote-button">Request a Quote</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>PlumbDePipe Solutions</h1>
            <p>
              Reliable, fast, and professional plumbing services you can trust.
            </p>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Professional plumbing service"
          className="hero-image"
        />
      </section>

      {/* Services Section with fade */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {[
            {
              title: "Emergency Repairs",
              desc: "24/7 response to plumbing emergencies with guaranteed workmanship.",
            },
            {
              title: "Installations",
              desc: "We handle everything from faucets to full bathroom systems.",
            },
            {
              title: "Maintenance",
              desc: "Prevent costly issues with scheduled plumbing checkups.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="service-card fade-in"
              ref={(el) => (serviceRef.current[i] = el!)}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 PlumbDePipe. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
