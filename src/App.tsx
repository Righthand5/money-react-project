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
import {Tag} from './views/Tag';

const AppWrapper= styled.div`
  color: #333;
`;


function App() {
    return (
        <AppWrapper>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/money"/>
                <Route path="/tags" exact = {true}>
                    <Tags/>
                </Route>
                <Route path="/tags/:id" exact={true}>
                    <Tag/>
                </Route>
                <Route path="/money" exact = {true}>
                    <Money/>
                </Route>
                <Route path="/Statistics" exact = {true}>
                    <Statistics/>
                </Route>
                <Route path="*" >
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
        </AppWrapper>
    );
}
export default App;
