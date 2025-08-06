import React from 'react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'SCSS',
    'Bootstrap', 'Git', 'Responsive Design', 'Web APIs'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <p className="lead mb-4">
              I'm a passionate web developer who enjoys creating interactive and engaging applications. 
              My projects range from games and utilities to creative tools that bring ideas to life.
            </p>
            <p className="mb-4">
              I love building web applications that are both functional and fun. 
              Whether it's recreating classic games like Minesweeper or creating unique tools 
              for specific communities like Animal Crossing fans, I enjoy the challenge of 
              turning concepts into working applications.
            </p>
            <div className="d-flex gap-3">
              <a 
                href="https://github.com/ssteigen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-github me-2"></i>
                View GitHub
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline-primary"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light p-4 rounded">
              <h3 className="h4 mb-3">Skills & Technologies</h3>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="badge bg-primary fs-6 py-2 px-3"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;