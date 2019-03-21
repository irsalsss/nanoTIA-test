import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:title" component={DetailPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
