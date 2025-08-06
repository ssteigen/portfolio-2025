import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Get In Touch</h2>
            <p className="lead">Let's connect and discuss opportunities</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            <div className="mb-4">
              <a 
                href="https://github.com/ssteigen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg me-3 mb-3"
              >
                <i className="fab fa-github me-2"></i>
                GitHub
              </a>
              <a 
                href="mailto:savanahsteigen@gmail.com" 
                className="btn btn-primary btn-lg mb-3"
              >
                <i className="fas fa-envelope me-2"></i>
                Email
              </a>
            </div>
            <p className="text-light">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;