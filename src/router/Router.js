import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../components/App';
import Show from '../containers/Show';

const Routes = () => (
  <BrowserRouter>

    <Switch>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/show" component={Show} />
      </div>
    </Switch>
  </BrowserRouter>
);
export default Routes;
