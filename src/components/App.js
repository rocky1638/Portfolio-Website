import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import FindYourGrail from './FindYourGrail';
import Sapling from './Sapling';
import MusicalInstrument from './MusicalInstrument';
import Consensys from './Consensys';
import TheWaterBoys from './TheWaterBoys';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div id="wrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/fyg" component={FindYourGrail} />
            <Route exact path="/blog/sapling" component={Sapling} />
            <Route exact path="/blog/consensys" component={Consensys} />
            <Route exact path="/blog/waterboys" component={TheWaterBoys} />
            <Route
              exact
              path="/blog/musical_instrument"
              component={MusicalInstrument}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
