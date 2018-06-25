import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" style={{marginTop: "3em"}}>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <h1 className="header-text left">
              Hi. I'm Rock.
            </h1>
            <hr className="blue-hr"/>
            <p style={{ marginBottom: '2.5em' }} className="left content-text">
              Hi! I'm currently in my first year of Computer Science at the{' '} University of Waterloo
              . I'm currently focused on full-stack web
              development (and dabbling in a bit of design).
              <br />
              <p style={{ marginTop: '0.5em' }}>
                When I'm not doing homework or sleeping, I enjoy playing
                badminton, watching basketball, and playing and singing along to
                instruments such as guitar and piano.
                <br />
              </p>
            </p>
            <div className="left">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                href="/assets/resume.pdf">
                   <span className="highlight-container-resume">
                  <span style={{fontWeight: "600"}} className="highlight">
                Resumé
                </span>
                </span>
              </a>
              <Link className="button" to="/blog">
              <span className="highlight-container">
                  <span style={{fontWeight: "600"}} className="highlight">
                Blog
                </span>
                </span>
              </Link>
              <a
                className="button"
                href="http://github.com/rocky1638"
                target="_blank"
                rel="noopener noreferrer">
                <span className="highlight-container-github">
                  <span style={{fontWeight: "600"}} className="highlight">
                  Github
                  </span>
                </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
