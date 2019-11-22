import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import BASE_NAME from './config/history';

import Layout from './components/Layout';
import './App.scss';

// pages
import Homepage from './pages/Homepage';

const App: React.FC = () => {
    return (
        <Router basename={BASE_NAME}>
            <Layout>
                <Switch>
                    <Route path="/" exact={true} component={Homepage}></Route>
                    <Route path="/a" render={() => <div>22</div>}></Route>
                    <Route path="/b" render={() => <div>33</div>}></Route>
                    <Route render={() => <div>未找到</div>}></Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
