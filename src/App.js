import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NavbarTIA from './components/NavbarTIA';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarTIA />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:slug" component={DetailPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
