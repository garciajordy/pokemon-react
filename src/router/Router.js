import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../components/App';

const Routes = () => (
  <BrowserRouter>
    <header>
      {/* <nav>
        <a className="nav-test" href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/quote">Quote</a>
      </nav> */}
    </header>
    <Switch>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Switch>
  </BrowserRouter>
);
export default Routes;
