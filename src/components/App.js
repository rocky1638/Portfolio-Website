import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import FindYourGrail from './FindYourGrail';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div id="wrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/fyg" component={FindYourGrail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
