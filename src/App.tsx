import React from 'react';
import styled from 'styled-components';
import 'index.scss'
import Nav from './components/Nav';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


const Wrapper = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
`
const Main = styled.div`
flex-grow: 1;
overflow: auto;
`


function App() {
    return(
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                    <Redirect exact from="/" to = "/money"/>
                    <Route path="/tags">
                        <Tags />
                    </Route>
                    <Route path="/money">
                        <Money />
                    </Route>
                    <Route path="/Statistics">
                        <Statistics />
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
                </Main>
                <Nav/>
        </Wrapper>
        </Router>
    );
}
function NoMatch(){
    return(
        <div>404 error</div>
    )
}
function Tags() {
    return <h2>标签页面</h2>;
}

function Money() {
    return <h2>记账页面</h2>;
}

function Statistics() {
    return <h2>统计页面</h2>;
}

export default App;
