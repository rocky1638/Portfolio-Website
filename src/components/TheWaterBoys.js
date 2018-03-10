import React, { Component } from 'react';

class FindYourGrail extends Component {
  componentDidMount() {
    document.body.className = 'white';
  }

  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: '25px' }}>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div>
              <h1 className="blog-1">
                <b>The Water Boys</b>
              </h1>
              <h3 className="blog-3">An unforgettable a capella experience.</h3>
              <h6 className="blog-6">Published March xx</h6>
            </div>
            <hr className="blue-hr" />
            <div>
              <h2 className="blog-2">
                <b>Coming Soon...</b>
              </h2>
              {/* <p className="blog-text">
                For this post, I'll be trying to give weekly updates about what
                I learn and what I contribute at my job at Consensys as a
                full-stack developer. I start on May 1st, 2018, so check back
                then!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindYourGrail;
