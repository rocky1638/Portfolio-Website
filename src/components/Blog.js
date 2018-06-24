import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Blog extends Component {
  componentDidMount() {
    document.body.className = 'white';
  }

  truncateText(text) {
    const maxLength = 250;

    if (text.length > maxLength) {
      const truncatedText = text.substr(0, maxLength) + '...';
      return truncatedText;
    }
    return text;
  }

  render() {
    return (
      <div className="container-fluid container-blog" style={{overflowY: "auto"}}>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 left">
            <h1 className="header-text blog-header-text">
              <b>Blog</b>
            </h1>
            <hr className="blue-hr" />
          </div>

          <div className="col-xs-12 col-sm-8 col-sm-offset-2 left">
            <h2 className="blog-1">
            <span className="highlight-container">
              <span className="highlight">
                Projects
              </span>
            </span>
            </h2>
            <Link to="/blog/fyg">
              <div className="preview-card">
                <h3 className="blog-card-header">FindYourGrail</h3>
                <p className="blog-text">
                  An attempt to simplify the process of buying and selling
                  clothes.
                </p>
              </div>
            </Link>
            <hr style={{margin: "0"}}/>
            <Link to="/blog/sapling">
              <div className="preview-card">
                <h3 className="blog-card-header">Sapling</h3>
                <p className="blog-text">
                  A web app to facilitate more efficient practicing.
                </p>
              </div>
            </Link>
            <h2 className="blog-1">
            <span className="highlight-container">
              <span className="highlight">
                Life
              </span>
              </span>
            </h2>
            <Link to="/blog/consensys">
              <div className="preview-card">
                <h3 className="blog-card-header">Consensys</h3>
                <p className="blog-text">
                  Weekly updates of my first co-op job experience at the
                  University of Waterloo.
                </p>
              </div>
            </Link>
            <hr style={{margin: "0"}}/>
            <Link to="/blog/waterboys">
              <div className="preview-card">
                <h3 className="blog-card-header">The Water Boys</h3>
                <p className="blog-text">
                  A look back at an action-packed term of a capella.
                </p>
              </div>
            </Link>
          </div>
            

            {/* <Link to="/blog/musical_instrument">
              <div className="preview-card">
                <h3 className="blog-card-header">The Importance of Music</h3>
                <p className="blog-text">
                  A slightly biased view on why everyone should learn to play at
                  least one musical instrument.
                </p>
              </div>
            </Link> */}
          </div>
        </div>
    );
  }
}

export default Blog;
