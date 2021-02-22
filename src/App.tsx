import React from 'react';

import 'index.scss';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Tags from './views/Tags';
import Statistics from 'views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper= styled.div`
  color: #333;
`;


function App() {
    return (
        <AppWrapper>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/money"/>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/Statistics">
                    <Statistics/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
        </AppWrapper>
    );
}
export default App;
