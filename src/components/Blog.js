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
      <div className="container-fluid container-blog">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h1 className="header-text blog-header-text">
              <b>Blog</b>
            </h1>
            <hr className="blue-hr" />
            <Link to="/blog/fyg">
              <div className="preview-card">
                <h3 className="blog-title">FindYourGrail</h3>
                <p className="blog-text">
                  An attempt to simplify the process of buying and selling
                  clothes.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
