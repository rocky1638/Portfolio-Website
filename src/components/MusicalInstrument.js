import React, { Component } from 'react';

class MusicalInstrument extends Component {
  componentDidMount() {
    document.body.className = 'white';
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div>
              <h1 className="blog-1">
                <b>The Importance of Music</b>
              </h1>
              <h3 className="blog-3">
                Why everyone (including you) should learn an instrument.
              </h3>
              <h6 className="blog-6">Published January xx, 2018</h6>
            </div>
            <hr className="blue-hr" />
            <div>
              <p className="blog-2">Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicalInstrument;
