import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import SelectionsPage  from './SelectionsPage';
import ResultsPage  from './ResultsPage';
import BarChart from './bar-chart';
import LineChart from './line-chart';
import Jokes from './Jokes';


function Router(props) {
  return (
    <BrowserRouter>
          <Switch>
        
            <Route path="/login" component={LoginPage} />

            <Route path="/portfolio" component={SelectionsPage} />

            <Route path="/results" component={ResultsPage} />

            <Route path="/chart" component={BarChart} />

            <Route path= "/lchart" component={LineChart} />
            <Route path= "/joke" component={Jokes} />
            
  
          </Switch>

    </BrowserRouter>
  );
}

// Router.propTypes = propTypes;
// Router.defaultProps = defaultProps;

export default Router;