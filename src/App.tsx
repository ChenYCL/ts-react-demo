import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import BASE_NAME from './config/history';

import Layout from './components/Layout';
import './App.scss';

// pages
import Homepage from './pages/Homepage';
import NotFound from './components/NotFound';
import { Songs } from './pages/Songs';

const App: React.FC = () => {
    return (
        <Router basename={BASE_NAME}>
            <Layout>
                <Switch>
                    <Route path="/" exact={true} component={Homepage}></Route>
                    <Route path="/songs" component={Homepage}></Route>
                    <Route path="/playlists" render={() => <div>playlists</div>} />
                    <Route path="/pricing" render={() => <div>pricing</div>}></Route>
                    <Route path="/work" render={() => <div>work</div>}></Route>
                    <Route path="*" exact={true} component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
