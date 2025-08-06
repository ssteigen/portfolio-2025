import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Hi, I'm Savanah Steigen
            </h1>
            <p className="lead mb-4">
              Web Developer passionate about creating interactive and engaging applications
            </p>
            <div className="d-flex gap-3">
              <a 
                href="#projects" 
                className="btn btn-light btn-lg"
              >
                View My Work
              </a>
              <a 
                href="https://github.com/ssteigen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" 
                 style={{width: '300px', height: '300px'}}>
              <span className="display-1">👩‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;