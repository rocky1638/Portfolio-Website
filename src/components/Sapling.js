import React, { Component } from 'react';

class Sapling extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div>
              <h1 className="blog-1">Sapling</h1>
              <h3 className="blog-3">For people serious about practicing.</h3>
              <h6 className="blog-6">Published February 5, 2018</h6>
            </div>
            <hr className="blue-hr" />
            <div>
              <h2 className="blog-2">Coming Soon...</h2>
              {/* <h2 className="blog-2">Initial Idea & Goals</h2>
              <p className="blog-text">j</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sapling;
